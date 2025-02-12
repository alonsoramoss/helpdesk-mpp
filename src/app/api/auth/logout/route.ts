import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  try {
    cookies().delete("auth");
    cookies().delete("userData");
    return NextResponse.json({ message: "Cierre de sesión exitoso" });
  } catch (error) {
    return NextResponse.json({ message: "Error al cerrar sesión" }, { status: 500 });
  }
}
