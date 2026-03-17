import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export default async function proxy(request: NextRequest) {
  // 1. Extraemos el token de la sesión de las cookies del usuario
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  // 2. Si no hay token (no ha iniciado sesión), lo rebotamos
  if (!token) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // 3. Si tiene token, lo dejamos pasar a la ruta solicitada
  return NextResponse.next();
}

// 4. Mantenemos el matcher para que solo vigile el dashboard
export const config = {
  matcher: [
    "/dashboard/:path*"
  ]
};