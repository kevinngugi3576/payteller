"use server";

import { createAdminClient, createSessionClient } from "../appright";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";
import { ID } from "node-appwrite";

export const SignIn = async ({ email, password }: signInProps) => {
  try {
    const { account } = await createAdminClient();
    const response = await account.createEmailPasswordSession(email, password);
    return parseStringify(response);
  } catch (error) {
    console.error("Error during form submission:", error);
    return null; // Return null or any other appropriate value in case of an error
  }
};


export const SignUp = async (userData: SignUpParams) => {
  const { email, password, firstName, lastName } = userData;
  try {
    const { account } = await createAdminClient();

    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
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
    return null;
  }
}

export const LogoutAccount = async()=>{
  try {
    const { account } = await createSessionClient()

    cookies().delete('appwrite-session')
    await account.deleteSession('current') 
  } catch(error){
    return null
  }

}