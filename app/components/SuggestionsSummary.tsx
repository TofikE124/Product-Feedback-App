import Image from "next/image";
import Card from "./Card";
import Vote from "./Vote";

import CommnetIcon from "@/public/assets/shared/icon-comments.svg";

export enum Category {
  UI = "UI",
  UX = "UX",
  ENHANCMENT = "Enhancment",
  BUG = "Bug",
  FEATURE = "Feature",
}
export interface SuggestionSummary {
  title: string;
  description: string;
  category: Category;
  upvotes: number;
  commentsNumber: number;
}

const SuggestionsSummary = ({
  suggestionSummary,
}: {
  suggestionSummary: SuggestionSummary;
}) => {
  return (
    <div className="suggestion-summary flex items-start ">
      <Vote>{suggestionSummary.upvotes}</Vote>
      <div className="flex flex-col items-start ml-10 mr-auto">
        <h3 className="h3 txt-dark-indigo mb-1">{suggestionSummary.title}</h3>
        <p className="b1 txt-light-slate-grey mb-3 ">
          {suggestionSummary.description}
        </p>
        <Card>{suggestionSummary.category}</Card>
      </div>
      <div className="flex items-center self-center gap-2">
        <Image src={CommnetIcon} alt="Comment Icon" />
        <p className="b1 txt-dark-indigo fw-bold">
          {suggestionSummary.commentsNumber}
        </p>
      </div>
    </div>
  );
};

export default SuggestionsSummary;
