import BackButton from "@/app/components/BackButton";
import Skeleton from "@/app/components/Skeleton";
import React from "react";

const SuggestionLoadingPage = () => {
  return (
    <div className="div-container mt-[88px] flex flex-col gap-6">
      <BackButton />
      <div className="md:hidden">
        <Skeleton height={200} baseColor="white" highlightColor="#f5f5f5" />
      </div>
      <div className="sm:hidden mt-3">
        <Skeleton height={150} baseColor="white" highlightColor="#f5f5f5" />
      </div>
      <Skeleton height={500} baseColor="white" highlightColor="#f5f5f5" />
    </div>
  );
};

export default SuggestionLoadingPage;
