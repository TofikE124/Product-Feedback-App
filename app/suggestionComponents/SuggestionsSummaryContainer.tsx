import { getServerSession } from "next-auth";
import SuggestionsSummary from "../components/SuggestionsSummary";
import SuggestionsEmpty from "./SuggestionsEmpty";
import prisma from "@/prisma/client";
import { Category, Status, Vote } from "@prisma/client";
import { notFound } from "next/navigation";

const SuggestionsSummaryContainer = async ({
  sortBy,
  category,
}: {
  sortBy: string;
  category: Category;
}) => {
  let orderBy = {};
  switch (sortBy) {
    case "Most Upvotes": {
      orderBy = {
        Votes: {
          _count: "desc",
        },
      };
      break;
    }
    case "Least Upvotes": {
      orderBy = {
        Votes: {
          _count: "asc",
        },
      };
      break;
    }
    case "Most Comments": {
      orderBy = {
        Comments: {
          _count: "desc",
        },
      };
      break;
    }
    case "Least Comments": {
      orderBy = {
        Comments: {
          _count: "asc",
        },
      };
      break;
    }
  }

  if (category && !Object.values(Category).includes(category)) notFound();

  const suggestions = await prisma.suggestion.findMany({
    where: { category: category },
    include: { Votes: true, Comments: true },
    orderBy: orderBy,
  });

  const session = await getServerSession();
  let userVotes: Vote[];
  if (session) {
    const user = await prisma?.user.findUnique({
      where: { email: session?.user?.email! },
      include: { Votes: true },
    });
    userVotes = user?.Votes || [];
  }

  return (
    <>
      {suggestions.length ? (
        <div className="flex flex-col gap-5 mt-6">
          {suggestions.map((suggestion, index) => (
            <SuggestionsSummary
              key={index}
              suggestionSummary={suggestion}
              userVotes={userVotes}
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
