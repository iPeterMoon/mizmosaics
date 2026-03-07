import { NextResponse } from "next/server";
import { prisma } from '@/src/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const nuevoUsuario = await prisma.user.create({
            data: {
                firstName: 'Angel de Belem',
                lastName: 'Castro',
                bussinessName: 'MizMosaics',
                email: 'angel@gmail.com',
                passwordHash: '1234'
            }
        });

        await prisma.user.delete({
            where: {
                id: nuevoUsuario.id
            }
        })

        return NextResponse.json({
            mensaje: 'Conexion exitosa WOOOO',
            usuario: nuevoUsuario
        });

    } catch (error: any) {
        return NextResponse.json({
            error: "Error de base de datos",
            detalle: error.message
        }, { status: 500 });
    }
}