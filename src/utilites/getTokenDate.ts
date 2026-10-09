import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getTokenFun() {
  const cookie = await cookies();

  // على localhost (http) اسم الكوكي: next-auth.session-token
  // على Vercel (https) اسمه: __Secure-next-auth.session-token
  const nextAuthToken =
    cookie.get("__Secure-next-auth.session-token")?.value ??
    cookie.get("next-auth.session-token")?.value;

  if (!nextAuthToken) return undefined;

  const accessToken = await decode({
    secret: process.env.NEXTAUTH_SECRET!,
    token: nextAuthToken,
  });
  return accessToken?.token;
}
