import SuggestionsSummary from "../components/SuggestionsSummary";
import SuggestionsEmpty from "./SuggestionsEmpty";
import prisma from "@/prisma/client";

const SuggestionsSummaryContainer = async () => {
  const suggestions = await prisma.suggestion.findMany();

  return (
    <>
      {suggestions.length ? (
        <div className="flex flex-col gap-5 mt-6">
          {suggestions.map((suggestion, index) => (
            <SuggestionsSummary key={index} suggestionSummary={suggestion} />
          ))}
        </div>
      ) : (
        <SuggestionsEmpty />
      )}
    </>
  );
};

export default SuggestionsSummaryContainer;
