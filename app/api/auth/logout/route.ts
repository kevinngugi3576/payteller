import { createSessionClient } from "@/lib/apprwrite";
import { cookies } from "next/headers"; // Import cookies from next/headers

export async function POST() {
  try {
    const { account } = await createSessionClient();

    // Get cookies and delete the session cookie
    const cookieStore = cookies();
    cookieStore.delete("appwrite-session");

    // Delete the session from Appwrite
    await account.deleteSession("current");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error logging out:", error);
    return new Response(JSON.stringify({ error: "Logout failed" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
