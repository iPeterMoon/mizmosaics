import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./prisma";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "johndoe@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials?.password) {
                    throw new Error("Please provide both email and password.");
                }

                const usuarioEncontrado = await prisma.user.findUnique({
                    where: {email: credentials.email}
                });

                if (!usuarioEncontrado || !usuarioEncontrado.passwordHash) {
                    throw new Error("Invalid credentials.");
                }

                const passwordCoincide = await bcrypt.compare(credentials.password, usuarioEncontrado.passwordHash);
                
                if(!passwordCoincide) {
                    throw new Error("Invalid credentials.");
                }

                return {
                    id: usuarioEncontrado.id.toString(),
                    name: `${usuarioEncontrado.firstName} ${usuarioEncontrado.lastName}`,
                    email: usuarioEncontrado.email
                };
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        session: async ({ session, token }) => {
            if (session.user) {
                session.user.id = token.id as string;
            }
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login',
    }
}