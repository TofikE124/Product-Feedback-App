import Image from "next/image";
import Skeleton from "../components/Skeleton";
import BackButton from "../components/BackButton";

const CreateLoadingPage = () => {
  return (
    <div className="div-container">
      <div className="w-full max-w-[540px] mx-auto mt-[90px]">
        <BackButton />
        <div className="w-full h-screen mt-10 relative">
          <Image
            src="/assets/shared/icon-new-feedback.svg"
            alt="Plus Icon"
            className="absolute top-[-28px] left-[42px] z-30"
            width={56}
            height={56}
          />
          <Skeleton
            baseColor="white"
            highlightColor="#f5f5f5"
            height={650}
            borderRadius={12}
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateLoadingPage;
