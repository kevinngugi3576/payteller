"use server";

import { createAdminClient, createSessionClient } from "../apprwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";
import { ID } from "node-appwrite";

export const SignIn = async ({ email, password }: signInProps) => {
  try {
    const { account } = await createAdminClient();
    const response = await account.createEmailPasswordSession(email, password);
    
    // Get the cookies instance outside of any async operation
    const cookieStore = cookies();
    
    // Set the cookie immediately
    cookieStore.set("appwrite-session", response.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(response);
  } catch (error) {
    console.error("Error during sign-in:", error);
    return null;
  }
};

export const SignUp = async (userData: SignUpParams) => {
  const { email, password, firstname, lastname } = userData;
  try {
    const { account } = await createAdminClient();

    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstname} ${lastname}`
    );
    const session = await account.createEmailPasswordSession(email, password);

    // Get the cookies instance outside of any async operation
    const cookieStore = cookies();
    
    // Set the cookie immediately
    cookieStore.set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUserAccount);
  } catch (error) {
    console.log("Error during form submission:", error);
    return null; // Return null or an appropriate value in case of an error
  }
};

// ... your initilization functions


export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();
    return parseStringify(user); 
  } catch (error) {
    console.error("Error fetching logged-in user:", error);
    return "The user cannot be found"; // Return null or an appropriate error response
  }
}


export const LogoutAccount = async () => {
  try {
    const { account } = await createSessionClient();

    cookies().delete("appwrite-session");
    await account.deleteSession("current");

    return true; // Return true to indicate success
  } catch (error) {
    console.error("Error logging out:", error);
    return false; // Return false to indicate failure
  }
};