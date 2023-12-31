import LoadingSkeleton, { SkeletonProps } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Skeleton = ({ ...rest }: SkeletonProps) => {
  return <LoadingSkeleton {...rest} />;
};

export default Skeleton;
