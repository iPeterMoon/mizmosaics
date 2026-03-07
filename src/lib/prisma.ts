import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const createPrismaClient = () => {

    console.log("Inicializando PrismaClient...");

    const host = process.env.DB_HOST;
    const port = Number(process.env.DB_PORT);
    const user = process.env.DB_USER;
    const password = process.env.DB_PASSWORD;
    const database = process.env.DB_NAME;

    const adapter = new PrismaMariaDb({
        host: host,
        port: port,
        user: user,
        password: password,
        database: database,
        connectionLimit: 5,
        connectTimeout: 10000
    });

    return new PrismaClient({ adapter });
};

// Si ya existe en global (por el hot-reload), úsalo. Si no, créalo de cero.
export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}