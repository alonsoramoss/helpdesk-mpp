import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { vch_email, vch_contrasena } = await req.json();
  const res = await fetch("https://67b35dc0392f4aa94fa6e97f.mockapi.io/prueba/usuarios");
  const users = await res.json();

  const user = users.find((u: any) => u.vch_email === vch_email && u.vch_contrasena === vch_contrasena);

  if (!user) {
    return NextResponse.json({ message: "Credenciales incorrectas" }, { status: 401 });
  }

  const response = NextResponse.json({ message: "Inicio de sesión exitoso", user });

  response.cookies.set("auth", "true", { httpOnly: true, secure: true, path: "/" });
  response.cookies.set("userData", JSON.stringify({ 
    int_idUsuario: user.int_idUsuario, 
    vch_email: user.vch_email 
  }), { httpOnly: true, secure: true, path: "/" });

  return response;
}
