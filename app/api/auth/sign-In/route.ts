import { createAdminClient } from "@/lib/apprwrite";
import { NextResponse } from "next/server";
import { cookies } from "next/headers"; // Import cookies API from next/headers

export async function POST(request: Request) {
  const { email, password }: signInProps = await request.json();

  try {
    const { account } = await createAdminClient();
    const response = await account.createEmailPasswordSession(email, password);

    // Get cookies from the request context
    const cookieStore = cookies();

    // Set the cookie
    cookieStore.set("appwrite-session", response.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error during sign-in:", error);
    return NextResponse.json({ error: "Sign-in failed" }, { status: 500 });
  }
}
