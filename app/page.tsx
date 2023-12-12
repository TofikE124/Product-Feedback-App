"use client";
import SuggestionsEmpty from "./SuggestionsEmpty";
import SuggestionsHeader from "./SuggestionsHeader";
import SuggestionsMainHeader from "./SuggestionsMain'sHeader";

export default function SuggestionsPage() {
  return (
    <div className="suggestions-page div-container w-full">
      <SuggestionsHeader />
      <main className="suggestions-page--main">
        <SuggestionsMainHeader />
        <SuggestionsEmpty />
      </main>
    </div>
  );
}
