import LoadingSkeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  height?: number | string;
  width?: number | string;
  count?: number;
}

const Skeleton = ({ width, height, count }: Props) => {
  return (
    <LoadingSkeleton
      width={width || 32}
      height={height || 32}
      count={count || 1}
    />
  );
};

export default Skeleton;
