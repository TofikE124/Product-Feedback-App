"use client";
import { ReactNode } from "react";
import ArrowUp from "../svgs/ArrowUp";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

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

  const handleClick = () => {
    if (!isActive) {
      axios
        .post("/api/votes", { suggestionId })
        .then((res) => {
          router.refresh();
        })
        .catch((error) => {
          toast.error("Can't vote now");
        });
    } else {
      axios
        .delete(`/api/votes/${suggestionId}`)
        .then((res) => {
          router.refresh();
        })
        .catch((error) => {
          toast.error("Can't delete vote now");
        });
    }
  };

  return (
    <button
      onClick={() => handleClick()}
      className={`vote ${isActive ? "is-active" : ""}`}
    >
      <ArrowUp />
      {children}
    </button>
  );
};

export default Vote;
