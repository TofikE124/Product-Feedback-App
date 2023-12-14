import { getServerSession } from "next-auth";
import SuggestionsSummary from "../components/SuggestionsSummary";
import SuggestionsEmpty from "./SuggestionsEmpty";
import prisma from "@/prisma/client";

const SuggestionsSummaryContainer = async () => {
  const suggestions = await prisma.suggestion.findMany({
    include: { Votes: true },
  });

  const session = await getServerSession();
  const user = await prisma?.user.findUnique({
    where: { email: session?.user?.email! },
    include: { Votes: true },
  });
  const userVotes = user?.Votes;

  return (
    <>
      {suggestions.length ? (
        <div className="flex flex-col gap-5 mt-6">
          {suggestions.map((suggestion, index) => (
            <SuggestionsSummary
              key={index}
              suggestionSummary={suggestion}
              userVotes={userVotes || []}
            />
          ))}
        </div>
      ) : (
        <SuggestionsEmpty />
      )}
    </>
  );
};

export default SuggestionsSummaryContainer;
