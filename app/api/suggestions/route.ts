import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { createSuggestionSchema } from "../validationSchema";
import { getServerSession } from "next-auth";

export async function GET(request: NextRequest) {
  const suggestions = await prisma.session.findMany();
  return NextResponse.json(suggestions);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createSuggestionSchema.safeParse(body);
  if (!validation.success) return NextResponse.json(validation.error.errors);

  const session = await getServerSession();
  if (!session?.user)
    return NextResponse.json({ message: "You can't do that" });

  const user = await prisma.user.findUnique({
    where: { email: session.user.email! },
  });

  const newSuggestion = await prisma.suggestion.create({
    data: {
      title: body.title,
      description: body.description,
      publisherId: user?.id!,
    },
  });

  return NextResponse.json(newSuggestion);
}
