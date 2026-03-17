import { prisma } from "@/src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/auth";

export async function POST(request: NextRequest) {


    const session = await getServerSession(authOptions);

    console.log("Session completa: ", JSON.stringify(session, null, 2));

    if (!session) {
        return NextResponse.json(
            { error: "Unauthorized" },
            { status: 401 }
        );
    }

    const userId = parseInt(session.user.id, 10);

    if (isNaN(userId)) {
        console.error("Invalid user ID in session:", session.user.id);
        return NextResponse.json(
            { error: "Invalid session, please log in again" },
            { status: 401 }
        );
    }

    const body = await request.json();
    const { name, description } = body;

    if (!name.trim()) {
        return NextResponse.json(
            { error: "Project name is required" },
            { status: 400 }
        );
    }


    try {
        const project = await prisma.project.create({
            data: {
                name: name.trim(),
                description: description || "",
                creationDate: new Date(),
                userId: userId,
            },
        });

        console.log("Project created:", project);

        return NextResponse.json(project, { status: 201 });
    } catch (error) {
        console.error("Error creating project:", error);
        return NextResponse.json(
            { error: "Failed to create project" },
            { status: 500 }
        );
    }
}
