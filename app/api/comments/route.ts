import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createCommentSchema } from "../validationSchema";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../auth/[...nextauth]/nextAuthOptions";

export async function GET(request: NextRequest) {
  const comments = await prisma.comment.findMany();
  return NextResponse.json(comments);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createCommentSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const session = await getServerSession(nextAuthOptions);
  if (!session?.user)
    return NextResponse.json({ message: "You can't do that" }, { status: 400 });
  const user = await prisma.user.findUnique({
    where: { email: session.user.email! },
  });
  if (!user)
    return NextResponse.json({ error: "An error occured" }, { status: 400 });

  const { content, suggestionId, taggedUserId, parentId } = body;

  const suggestion = await prisma.suggestion.findUnique({
    where: { id: Number(suggestionId) },
  });

  if (!suggestion)
    return NextResponse.json(
      { error: "Suggestion not found" },
      { status: 404 }
    );

  let taggedUser;
  if (taggedUserId) {
    taggedUser = await prisma.user.findUnique({ where: { id: taggedUserId } });
  }

  if (taggedUserId && !taggedUser)
    return NextResponse.json(
      { message: "Tagged user not found" },
      { status: 404 }
    );

  let parent;
  if (parentId) {
    parent = await prisma.comment.findUnique({ where: { id: parentId } });
  }

  if (parentId && !parent)
    return NextResponse.json(
      { message: "Comment wasn't found" },
      { status: 404 }
    );

  // return NextResponse.json({ parent, taggedUser });

  const newComment = await prisma.comment.create({
    data: {
      content,
      publisherId: user.id,
      suggestionId: suggestion.id,
      taggedUserId: taggedUser?.id,
      parentId: parent?.id,
    },
  });

  return NextResponse.json(newComment);
}
