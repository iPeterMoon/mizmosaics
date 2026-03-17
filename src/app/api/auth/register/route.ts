import { NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    // 1. Capturar los datos enviados desde el frontend
    const body = await request.json();
    const { email, password, firstName, lastName, company } = body;

    // 2. Validación básica: Que no falte ningún dato vital
    if (!email || !password || !firstName || !lastName || !company) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // 3. Verificar si el correo ya existe en la base de datos
    const usuarioExistente = await prisma.user.findUnique({
      where: { email: email }
    });

    if (usuarioExistente) {
      return NextResponse.json(
        { error: "This email is already registered." },
        { status: 409 } // 409 significa Conflicto
      );
    }

    // 4. Encriptar la contraseña antes de guardarla
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 5. Crear al nuevo constructor en la base de datos
    const nuevoUsuario = await prisma.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        bussinessName: company,
        email: email,
        passwordHash: hashedPassword, // ¡Guardamos el hash, NUNCA el texto plano!
      }
    });

    // 6. Responder con éxito (omitiendo la contraseña por seguridad)
    return NextResponse.json(
      { 
        message: "Account created successfully.",
        user: {
          id: nuevoUsuario.id,
          email: nuevoUsuario.email,
          empresa: nuevoUsuario.bussinessName,
        }
      },
      { status: 201 } // 201 significa "Creado"
    );

  } catch (error: any) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}