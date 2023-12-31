import Skeleton from "../components/Skeleton";

const RoadmapLoadingPage = () => {
  return (
    <div className="div-container md:mt-14 pb-[200px]">
      <div className="md:hidden">
        <div className=" flex flex-col gap-0 -ml-[2em] -mt-2">
          <Skeleton
            height={115}
            baseColor="#373f68"
            highlightColor="#656ea3"
            borderRadius={0}
            width="100vw"
          />
          <Skeleton
            height={100}
            baseColor="white"
            highlightColor="#f5f5f5"
            width="100vw"
            borderRadius={0}
          />
        </div>

        <div className="flex flex-col gap-4 mt-6">
          <div className="border-solid border-0 rounded-t-lg border-t-[8px] border-t-[#62BCFA]">
            <div className="-mt-[6px]">
              <Skeleton
                height={200}
                width="full"
                baseColor="white"
                highlightColor="#f5f5f5"
              />
            </div>
          </div>
          <div className="border-solid border-0 rounded-t-lg border-t-[8px] border-t-[#62BCFA]">
            <div className="-mt-[6px]">
              <Skeleton
                height={200}
                width="full"
                baseColor="white"
                highlightColor="#f5f5f5"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <div className="flex flex-col gap-6">
          <Skeleton
            height={120}
            baseColor="#373f68"
            highlightColor="#656ea3"
            borderRadius={8}
            width="full"
          />
          <Skeleton
            height={100}
            baseColor="white"
            highlightColor="#f5f5f5"
            width="full"
            borderRadius={0}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6">
          {/* Colum 1 */}
          <div className="flex flex-col gap-4">
            <div className="border-solid border-0 rounded-t-lg border-t-[8px] border-t-[#F49F85]">
              <div className="-mt-[6px]">
                <Skeleton
                  height={250}
                  width="full"
                  baseColor="white"
                  highlightColor="#f5f5f5"
                />
              </div>
            </div>
            <div className="border-solid border-0 rounded-t-lg border-t-[8px] border-t-[#F49F85]">
              <div className="-mt-[6px]">
                <Skeleton
                  height={250}
                  width="full"
                  baseColor="white"
                  highlightColor="#f5f5f5"
                />
              </div>
            </div>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <div className="border-solid border-0 rounded-t-lg border-t-[8px] border-t-[#AD1FEA]">
              <div className="-mt-[6px]">
                <Skeleton
                  height={250}
                  width="full"
                  baseColor="white"
                  highlightColor="#f5f5f5"
                />
              </div>
            </div>
            <div className="border-solid border-0 rounded-t-lg border-t-[8px] border-t-[#AD1FEA]">
              <div className="-mt-[6px]">
                <Skeleton
                  height={250}
                  width="full"
                  baseColor="white"
                  highlightColor="#f5f5f5"
                />
              </div>
            </div>
            <div className="border-solid border-0 rounded-t-lg border-t-[8px] border-t-[#AD1FEA]">
              <div className="-mt-[6px]">
                <Skeleton
                  height={250}
                  width="full"
                  baseColor="white"
                  highlightColor="#f5f5f5"
                />
              </div>
            </div>
          </div>
          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <div className="border-solid border-0 rounded-t-lg border-t-[8px] border-t-[#62BCFA]">
              <div className="-mt-[6px]">
                <Skeleton
                  height={250}
                  width="full"
                  baseColor="white"
                  highlightColor="#f5f5f5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapLoadingPage;
