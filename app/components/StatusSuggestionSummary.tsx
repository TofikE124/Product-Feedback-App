import Image from "next/image";
import Card from "./Card";
import Vote from "./Vote";

import CommnetIcon from "@/public/assets/shared/icon-comments.svg";
import { Vote as voteType } from "@prisma/client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { StatusList } from "../lists/StatusList";
import { getServerSession } from "next-auth";
import { SuggestionWithVotesAndComments } from "./SuggestionsSummary";
import CategoryCard from "./CategoryCard";
import { CategoryList } from "../lists/categoryList";

const StatusSuggestionsSummary = async ({
  suggestionSummary,
  userVotes,
}: {
  suggestionSummary: SuggestionWithVotesAndComments;
  userVotes: voteType[];
}) => {
  const session = await getServerSession();
  const SuggestionStatus = StatusList[suggestionSummary.status];

  const hasVoted = Boolean(
    userVotes?.filter((vote) => vote.suggestionId === suggestionSummary.id)
      .length
  );

  return (
    <div className="suggestion-summary is-status items-start no-underline">
      {session?.user ? (
        <Link
          href={`/suggestions/${suggestionSummary.id}`}
          className={`suggestion-summary--bg   cursor-pointer`}
        ></Link>
      ) : (
        ""
      )}
      <span
        className={`suggestion-summary--border-top ${
          StatusList[suggestionSummary.status].className
        }`}
      ></span>
      <div className="suggestion-summary--status flex items-center gap-4 row-start-1">
        <div className={`small-circle ${SuggestionStatus.className}`}></div>
        <p className="b1 txt-light-slate-grey">{SuggestionStatus.label}</p>
      </div>
      <div className="vote-container">
        <Vote isActive={hasVoted} suggestionId={suggestionSummary.id}>
          {suggestionSummary.Votes.length}
        </Vote>
      </div>

      <h3 className="suggestion-summary--title h3 txt-dark-indigo">
        {suggestionSummary.title}
      </h3>
      <p className="suggestion-summary--description b1 txt-light-slate-grey">
        {suggestionSummary.description}
      </p>
      <div className="suggestion-summary--category">
        <CategoryCard category={CategoryList[suggestionSummary.category]} />
      </div>
      <div className="suggestion-summary--comments flex items-center self-center gap-2">
        <Image src={CommnetIcon} alt="Comment Icon" />
        <p className="b1 txt-dark-indigo fw-bold">
          {suggestionSummary.Comments.length}
        </p>
      </div>
    </div>
  );
};

export default StatusSuggestionsSummary;
