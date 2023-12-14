import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { nextAuthOptions } from "../../auth/[...nextauth]/route";

interface Props {
  params: { suggestionId: string };
}
export async function DELETE(
  request: NextRequest,
  { params: { suggestionId } }: Props
) {
  const session = await getServerSession(nextAuthOptions);
  if (!session?.user)
    return NextResponse.json({ message: "You can't do that" });
  const user = await prisma.user.findUnique({
    where: { email: session.user.email! },
    include: { Votes: true },
  });
  if (!user) return;

  const vote = user.Votes.filter(
    (vote) => vote.suggestionId === Number(suggestionId)
  )?.[0];
  if (!vote)
    return NextResponse.json({ error: "Vote not found" }, { status: 404 });

  await prisma.vote.delete({ where: { id: vote.id } });
  return NextResponse.json({ message: "Vote sucessfully deleted" });
}
