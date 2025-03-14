import 'server-only';

import { JWTPayload, SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const secretKey = process.env.JWT_SECRET_KEY;
const encodedKey = new TextEncoder().encode(secretKey);

export const encrypt = async (payload: JWTPayload) => {
  return new SignJWT(payload)
  .setProtectedHeader({ alg: 'HS256' })
  .setIssuedAt()
  .setExpirationTime('7d')
  .sign(encodedKey)
}

export const decrypt = async (session: string | undefined = ''): Promise<JWTPayload>  => {
  const { payload } = await jwtVerify(session, encodedKey, {
    algorithms: ['HS256']
  });

  return payload;
}

export async function createSession(token: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const cookieStore = await cookies();
 
  cookieStore.set('token', token, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
}