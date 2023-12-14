import Image from "next/image";
import Card from "./Card";
import CommnetIcon from "@/public/assets/shared/icon-comments.svg";
import { Suggestion, Vote as VoteType } from "@prisma/client";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import Vote from "./Vote";

type SuggestionWithVotes = { Votes: VoteType[] } & Suggestion;

const SuggestionsSummary = async ({
  suggestionSummary,
  userVotes,
}: {
  suggestionSummary: SuggestionWithVotes;
  userVotes: VoteType[];
}) => {
  const session = await getServerSession(nextAuthOptions);

  const hasVoted = Boolean(
    userVotes?.filter((vote) => vote.suggestionId === suggestionSummary.id)
      .length
  );

  return (
    <div className="suggestion-summary items-start no-underline">
      {session?.user ? (
        <Link
          href={`/edit/${suggestionSummary.id}`}
          className={`suggestion-summary--bg   cursor-pointer`}
        ></Link>
      ) : (
        ""
      )}

      <Vote isActive={hasVoted} suggestionId={suggestionSummary.id}>
        {suggestionSummary.Votes.length}
      </Vote>
      <h3 className="suggestion-summary--title h3 txt-dark-indigo">
        {suggestionSummary.title}
      </h3>
      <p className="suggestion-summary--description b1 txt-light-slate-grey">
        {suggestionSummary.description}
      </p>
      <div className="suggestion-summary--category">
        <Card>{suggestionSummary.category}</Card>
      </div>
      <div className="suggestion-summary--comments flex items-center self-center gap-2">
        <Image src={CommnetIcon} alt="Comment Icon" />
        <p className="b1 txt-dark-indigo fw-bold">
          {suggestionSummary.comments}
        </p>
      </div>
    </div>
  );
};

export default SuggestionsSummary;
