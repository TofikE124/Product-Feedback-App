import Image from "next/image";
import Card from "./Card";
import Vote from "./Vote";

import CommnetIcon from "@/public/assets/shared/icon-comments.svg";
import { Suggestion } from "@prisma/client";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";

const SuggestionsSummary = async ({
  suggestionSummary,
}: {
  suggestionSummary: Suggestion;
}) => {
  const session = await getServerSession(nextAuthOptions);

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

      <Vote>{suggestionSummary.upVotes}</Vote>
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
