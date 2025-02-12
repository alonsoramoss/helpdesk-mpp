import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { vch_usuario, vch_contraseña } = await req.json();
  const res = await fetch("https://munic.free.beeceptor.com/usuarios");
  const users = await res.json();

  const user = users.find((u: any) => u.vch_usuario === vch_usuario && u.vch_contraseña === vch_contraseña);

  if (!user) {
    return NextResponse.json({ message: "Credenciales incorrectas" }, { status: 401 });
  }

  const response = NextResponse.json({ message: "Inicio de sesión exitoso", user });

  response.cookies.set("auth", "true", { httpOnly: true, secure: true, path: "/" });
  response.cookies.set("userData", JSON.stringify({ 
    int_idUsuario: user.int_idUsuario, 
    vch_usuario: user.vch_usuario 
  }), { httpOnly: true, secure: true, path: "/" });

  return response;
}
