"use client";
import SuggestionsHeader from "./SuggestionsHeader";
import SuggestionsMainHeader from "./SuggestionsMain'sHeader";
import SuggestionsSummaryContainer from "./SuggestionsSummaryContainer";

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
