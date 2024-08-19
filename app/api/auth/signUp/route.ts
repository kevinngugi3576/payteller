import { createAdminClient } from '@/lib/apprwrite';
import { NextResponse } from 'next/server';
import { ID } from 'node-appwrite';

export async function POST(request: Request) {
  const userData: SignUpParams = await request.json();
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

    // Create the response
    const response = NextResponse.json({
      ...newUserAccount,
      name: `${firstName} ${lastName}`,
      firstName,
      lastName,
    });

    // Set the cookie in the response
    response.cookies.set('appwrite-session', session.secret, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
    });

    return response;
  } catch (error) {
    console.log('Error during form submission:', error);
    return NextResponse.json({ error: 'Sign-up failed' }, { status: 500 });
  }
}
