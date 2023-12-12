import SuggestionsHeader from "./suggestionComponents/SuggestionsHeader";
import SuggestionsMainHeader from "./suggestionComponents/SuggestionsMain'sHeader";
import SuggestionsSummaryContainer from "./suggestionComponents/SuggestionsSummaryContainer";

export default async function SuggestionsPage() {
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
