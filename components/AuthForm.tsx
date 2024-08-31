"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "@/components/CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { SignIn, SignUp } from "@/lib/actions/user.actions";

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      if (type === "sign-up") {
        
        const {
          email,
          password,
          firstname,
          lastname,
          address1,
          city,
          state,
          postalCode,
          DateOfBirth,
        } = data;
        if (
          !email ||
          !password ||
          !firstname ||
          !lastname ||
          !address1 ||
          !city ||
          !state ||
          !postalCode ||
          !DateOfBirth
        ) {
          throw new Error("Missing required fields");
        }
        const newUser = await SignUp({
          email,
          password,
          firstname: firstname,
          lastname: lastname,
          
        });

        if (newUser) {
          // Redirect to the homepage on successful sign-up
          router.push("/Home");
        }
      }

      if (type === "sign-in") {
        if (
          typeof data.email === "string" &&
          typeof data.password === "string"
        ) {
          const response = await SignIn({
            email: data.email,
            password: data.password,
          });

          if (response) {
            // Redirect to the homepage on successful sign-in
            router.push("/Home");
          } else {
            // Handle sign-in failure (e.g., show an error message)
            console.error("Sign-in failed");
            router.push("/sign-up");
          }
        } else {
          console.error("Invalid email or password format");
        }
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    } finally {
      setIsLoading(false);
      console.log(data)
    }
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link className="flex items-center gap-2 mb-12 cursor-pointer" href="/">
          <Image src="/icons/logo.svg" width={34} height={34} alt="log app" />
          <h1 className="font-bold text-black text-26">Payteller</h1>
        </Link>
      </header>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {type === "sign-up" && (
            <>
              <div className="flex gap-4">
                <CustomInput
                  control={form.control}
                  name="firstname"
                  label="FirstName"
                  placeholder="Enter your firstName"
                />
                <CustomInput
                  control={form.control}
                  name="lastname"
                  label="LastName"
                  placeholder="Enter your lastName"
                />
              </div>
              <CustomInput
                control={form.control}
                name="city"
                label="City"
                placeholder="Enter your city"
              />
              <CustomInput
                control={form.control}
                name="address1"
                label="Address1"
                placeholder="Enter your address"
              />
              <div className="flex gap-4">
                <CustomInput
                  control={form.control}
                  name="state"
                  label="State"
                  placeholder="State"
                />
                <CustomInput
                  control={form.control}
                  name="postalCode"
                  label="PostalCode"
                  placeholder="Example 20100"
                />
              </div>
              <CustomInput
                control={form.control}
                name="DateOfBirth"
                label="Date Of Birth"
                placeholder="YYYY-MM-DD"
              />
            </>
          )}

          <CustomInput
            control={form.control}
            name="email"
            label="Email"
            placeholder="Enter your Email"
          />
          <CustomInput
            control={form.control}
            name="password"
            label="Password"
            placeholder="Enter your Password"
          />

          <div className="flex flex-col gap-4">
            <Button
              type="submit"
              className="cursor-pointer form-btn"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Loading...
                </>
              ) : type === "sign-in" ? (
                "Sign-in"
              ) : (
                "Sign-up"
              )}
            </Button>
          </div>
        </form>
      </Form>

      <footer className="flex justify-center gap-1">
        <p className="font-normal text-gray-600 text-14">
          {type === "sign-in"
            ? "Don't have an account?"
            : "Already have an account?"}
        </p>
        <Link
          href={type === "sign-in" ? "/sign-up" : "/sign-in"}
          className="form-link"
        >
          {type === "sign-in" ? "Sign-up" : "Sign-in"}
        </Link>
      </footer>
    </section>
  );
};

export default AuthForm;