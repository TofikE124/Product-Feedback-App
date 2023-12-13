import SuggestionsHeader from "./suggestionComponents/SuggestionsHeader";
import SuggestionsMainHeader from "./suggestionComponents/SuggestionsMain'sHeader";
import SuggestionsSummaryContainer from "./suggestionComponents/SuggestionsSummaryContainer";

export default async function SuggestionsPage() {
  return (
    <div className="suggestions-page div-container">
      <SuggestionsHeader />
      <main className="suggestions-page--main h-fit pb-28">
        <SuggestionsMainHeader />
        <SuggestionsSummaryContainer />
      </main>
    </div>
  );
}
