import React from "react";
import Skeleton from "../components/Skeleton";

const SuggestionsLoadingSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 md:mt-8">
      <Skeleton height={200} baseColor="white" highlightColor="#f5f5f5" />
      <Skeleton height={200} baseColor="white" highlightColor="#f5f5f5" />
      <Skeleton height={200} baseColor="white" highlightColor="#f5f5f5" />
      <Skeleton height={200} baseColor="white" highlightColor="#f5f5f5" />
    </div>
  );
};

export default SuggestionsLoadingSkeleton;
