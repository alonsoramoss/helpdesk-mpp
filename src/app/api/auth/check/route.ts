import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const auth = cookies().get("auth")?.value;
  const userData = cookies().get("userData")?.value;

  if (!auth || !userData) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  return NextResponse.json({
    authenticated: true,
    user: JSON.parse(userData),
  });
}
