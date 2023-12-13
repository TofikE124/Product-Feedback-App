import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { nextAuthOptions } from "../../auth/[...nextauth]/route";
import prisma from "@/prisma/client";
import { updateSuggestionSchema } from "../../validationSchema";

interface Props {
  params: { id: string };
}

export async function PATCH(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();

  const validation = updateSuggestionSchema.safeParse(body);
  if (!validation.success) return NextResponse.json(validation.error.errors);

  const session = await getServerSession(nextAuthOptions);
  if (!session?.user)
    return NextResponse.json({ message: "You can't do that" }, { status: 401 });

  const suggestion = await prisma.suggestion.findUnique({
    where: { id: Number(id) },
  });
  if (!suggestion)
    return NextResponse.json(
      { error: "Suggestion Not Found" },
      { status: 404 }
    );

  const updatedSuggestion = await prisma.suggestion.update({
    where: { id: Number(id) },
    data: {
      title: body.title,
      description: body.description,
      category: body.category,
      status: body.status,
    },
  });

  return NextResponse.json(updateSuggestionSchema);
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  const session = await getServerSession(nextAuthOptions);
  if (!session?.user)
    return NextResponse.json({ message: "You can't do that" }, { status: 401 });

  const suggestion = await prisma.suggestion.findUnique({
    where: { id: Number(id) },
  });
  if (!suggestion)
    return NextResponse.json(
      { error: "Suggestion Not Found" },
      { status: 404 }
    );

  await prisma.suggestion.delete({ where: { id: Number(id) } });
  return NextResponse.json({
    message: `Suggestion with the id of ${id} was sucessfully deleted`,
  });
}
