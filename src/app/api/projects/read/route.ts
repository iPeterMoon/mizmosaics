import { prisma } from "@/src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const userIdParam = searchParams.get("userId");

    if (!userIdParam) {
      return NextResponse.json(
        { error: "userId is required" },
        { status: 400 }
      );
    }

    const userId = parseInt(userIdParam, 10);

    if (isNaN(userId)) {
      return NextResponse.json(
        { error: "userId must be a valid number" },
        { status: 400 }
      );
    }

    const projects = await prisma.project.findMany({
      where: { userId },
      include: {
        quotes: {
          orderBy: { requestedAt: "desc" },
          take: 1,
        },
      },
      orderBy: { creationDate: "desc" },
    });

    const formattedProjects = projects.map((project) => ({
      id: project.id,
      name: project.name,
      description: project.description,
      dateCreated: project.creationDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      totalArea: "N/A",
      status: project.quotes[0]?.status || "No Quote",
      quoteId: project.quotes[0]?.id ? `QT-${project.quotes[0].id.toString().padStart(4, "0")}` : "N/A",
    }));

    return NextResponse.json(formattedProjects);
  } catch (error) {
    console.error("Error fetching user projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
