import Vote from "@/app/components/Vote";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { voteSchema } from "../validationSchema";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../auth/[...nextauth]/route";

export async function GET(request: NextRequest) {
  const voetes = await prisma.vote.findMany();
  return NextResponse.json(voetes);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = voteSchema.safeParse(body);
  if (!validation.success) return NextResponse.json(validation.error.errors);

  const session = await getServerSession(nextAuthOptions);
  if (!session?.user)
    return NextResponse.json({ message: "You can't do that" });
  const user = await prisma.user.findUnique({
    where: { email: session.user.email! },
    include: { Votes: true },
  });
  if (!user) return;

  const suggestionId = body.suggestionId;
  if (user.Votes.filter((vote) => vote.suggestionId === suggestionId).length) {
    return NextResponse.json("Can't vote twice for same suggestion");
  }
  const suggestion = await prisma.suggestion.findUnique({
    where: { id: suggestionId },
  });
  if (!suggestion)
    return NextResponse.json(
      { error: "Suggestion not found" },
      { status: 404 }
    );

  const newVote = await prisma.vote.create({
    data: { userId: user.id!, suggestionId: suggestion.id },
  });
  return NextResponse.json(newVote);
}
