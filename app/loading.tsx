import Skeleton from "./components/Skeleton";
import SuggestionsHeader from "./suggestionComponents/SuggestionsHeader";

const LoadingPage = () => {
  return (
    <div className="suggestions-page div-container md:mt-[128px] lg:mt-[172px]">
      <SuggestionsHeader />
      <main className="suggestions-page--main h-fit pb-28 md:mt-10 lg:mt-0">
        <div className="md:hidden">
          <Skeleton
            height={92}
            baseColor="#373f68"
            highlightColor="#656ea3"
            borderRadius={0}
            width="100vw"
            className="sm:-left-[2em] sm:-top-8"
          />
        </div>
        <div className="sm:hidden">
          <Skeleton
            height={92}
            baseColor="#373f68"
            highlightColor="#656ea3"
            borderRadius={8}
            width="full"
          />
        </div>
        <div className="flex flex-col gap-4 md:mt-8">
          <Skeleton height={200} baseColor="white" highlightColor="#f5f5f5" />
          <Skeleton height={200} baseColor="white" highlightColor="#f5f5f5" />
          <Skeleton height={200} baseColor="white" highlightColor="#f5f5f5" />
          <Skeleton height={200} baseColor="white" highlightColor="#f5f5f5" />
        </div>
      </main>
    </div>
  );
};

export default LoadingPage;
