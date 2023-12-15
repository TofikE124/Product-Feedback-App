import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/nextAuthOptions";
import BackButton from "@/app/components/BackButton";
import SuggestionsSummary from "@/app/components/SuggestionsSummary";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import PostCommentSection from "../PostCommentSection";
import Comment from "./Comment";
import Skeleton from "@/app/components/Skeleton";
import Link from "next/link";

interface Props {
  params: { id: string };
}

const SuggestionPage = async ({ params: { id } }: Props) => {
  const session = await getServerSession(nextAuthOptions);

  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email || "" },
    include: { Votes: true },
  });

  const suggestion = await prisma.suggestion.findUnique({
    where: { id: Number(id) },
    include: { Votes: true, Comments: true },
  });
  if (!suggestion) notFound();

  const comments = await prisma.comment.findMany({
    where: { suggestionId: suggestion.id, parentId: null },
    include: {
      publisher: true,
      childComments: { include: { publisher: true, taggedUser: true } },
      taggedUser: true,
    },
    orderBy: { createdAt: "desc" },
  });

  const commentsWithoutChildren = await prisma.comment.findMany({
    where: { suggestionId: suggestion.id },
  });

  if (!suggestion) return <Skeleton width="100%" height="100%" />;

  return (
    <div className="suggestion-comments-page div-container">
      <div className="flex justify-between">
        <BackButton />
        {suggestion.publisherId === user?.id ? (
          <Link
            href={`/edit/${suggestion.id}`}
            className="btn btn-small btn-blue h4 txt-white no-underline"
          >
            Edit Feedback
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="mt-9 mb-6">
        <SuggestionsSummary
          userVotes={user?.Votes || []}
          suggestionSummary={suggestion}
        />
      </div>
      <div className="comments-container">
        <h1 className="h1 txt-light-slate-grey mb-7">
          {commentsWithoutChildren.length
            ? commentsWithoutChildren.length + " Comments"
            : "No comments yet be the first to comment"}
        </h1>
        <div className="flex flex-col gap-6">
          {comments.map((comment) => {
            if (comment.childComments.length) {
              return (
                <div className="comment-container" key={suggestion.id}>
                  <Comment
                    suggestionId={suggestion.id}
                    comment={comment}
                    user={comment.publisher}
                  />
                  <div className="comment-children-container">
                    {comment.childComments.map((commentChild) => (
                      <Comment
                        key={commentChild.id}
                        suggestionId={suggestion.id}
                        comment={commentChild}
                        user={commentChild.publisher}
                      />
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <div className="comment-container" key={suggestion.id}>
                <Comment
                  suggestionId={suggestion.id}
                  comment={comment}
                  user={comment.publisher}
                />
              </div>
            );
          })}
        </div>
      </div>
      <PostCommentSection suggestionId={suggestion.id} />
    </div>
  );
};

export default SuggestionPage;
