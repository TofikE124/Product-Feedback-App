import React from "react";
import SuggestionsSummary, {
  SuggestionSummary,
  Category,
} from "./components/SuggestionsSummary";
import SuggestionsEmpty from "./SuggestionsEmpty";

const SuggestionsSummaryContainer = () => {
  const suggestions: SuggestionSummary[] = [
    {
      title: "Add tags for solutions",
      description: "Easier to search for solutions based on a specific stack.",
      upvotes: 99,
      category: Category.FEATURE,
      commentsNumber: 4,
    },
    {
      title: "Add tags for solutions",
      description: "Easier to search for solutions based on a specific stack.",
      upvotes: 99,
      category: Category.FEATURE,
      commentsNumber: 4,
    },
    {
      title: "Add tags for solutions",
      description: "Easier to search for solutions based on a specific stack.",
      upvotes: 99,
      category: Category.FEATURE,
      commentsNumber: 4,
    },
    {
      title: "Add tags for solutions",
      description: "Easier to search for solutions based on a specific stack.",
      upvotes: 99,
      category: Category.FEATURE,
      commentsNumber: 4,
    },
  ];
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
