"use client";
import SuggestionsHeader from "./SuggestionsHeader";
import SuggestionsMainHeader from "./SuggestionsMain'sHeader";

export default function SuggestionsPage() {
  return (
    <div className="suggestions-page div-container">
      <SuggestionsHeader />
      <main className="suggestions-page--main">
        <SuggestionsMainHeader />
      </main>
    </div>
  );
}
