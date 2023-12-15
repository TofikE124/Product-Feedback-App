import { Category } from "@prisma/client";
import Navbar from "./Navbar";
import SuggestionsHeader from "./suggestionComponents/SuggestionsHeader";
import SuggestionsMainHeader from "./suggestionComponents/SuggestionsMain'sHeader";
import SuggestionsSummaryContainer from "./suggestionComponents/SuggestionsSummaryContainer";

interface Props {
  searchParams: { sortBy: string; category: Category };
}

export default async function SuggestionsPage({
  searchParams: { sortBy, category },
}: Props) {
  return (
    <>
      <Navbar />
      <div className="suggestions-page div-container">
        <SuggestionsHeader  />
        <main className="suggestions-page--main h-fit pb-28">
          <SuggestionsMainHeader sortBy={sortBy} />
          <SuggestionsSummaryContainer sortBy={sortBy} category={category} />
        </main>
      </div>
    </>
  );
}
