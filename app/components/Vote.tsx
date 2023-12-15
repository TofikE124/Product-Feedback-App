"use client";
import { ReactNode, useState } from "react";
import ArrowUp from "./svgs/ArrowUp";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Skeleton from "./Skeleton";
import Spinner from "./Spinner";

interface Props {
  children: ReactNode;
  suggestionId: number;
  isActive?: boolean;
  onClick?: () => void;
}

const Vote = ({
  children,
  suggestionId,
  isActive,
  onClick = () => {},
}: Props) => {
  const router = useRouter();
  const { status } = useSession();

  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    if (!isActive) {
      setLoading(true);
      axios
        .post("/api/votes", { suggestionId })
        .then((res) => {
          router.refresh();
          setLoading(false);
        })
        .catch((error) => {
          toast.error("Can't vote now");
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(true);
      axios
        .delete(`/api/votes/${suggestionId}`)
        .then((res) => {
          router.refresh();
          setLoading(false);
        })
        .catch((error) => {
          toast.error("Can't delete vote now");
        })
        .finally(() => setLoading(false));
    }
  };

  if (status === "loading") return <Skeleton width={34} height={60} />;

  return (
    <button
      disabled={status !== "authenticated"}
      onClick={() => handleClick()}
      className={`vote ${isActive ? "is-active" : ""}`}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ArrowUp />
          {children}
        </>
      )}
    </button>
  );
};

export default Vote;
