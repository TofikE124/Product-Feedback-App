"use client";
import SuggestionsHeader from "./suggestionComponent/SuggestionsHeader";
import SuggestionsMainHeader from "./suggestionComponent/SuggestionsMain'sHeader";
import SuggestionsSummaryContainer from "./suggestionComponent/SuggestionsSummaryContainer";

export default function SuggestionsPage() {
  return (
    <div className="suggestions-page div-container w-full">
      <SuggestionsHeader />
      <main className="suggestions-page--main">
        <SuggestionsMainHeader />
        <SuggestionsSummaryContainer />
      </main>
    </div>
  );
}
