"use client";

import { useRouter } from "next/navigation";
import ArrowLeft from "../svgs/ArrowLeft";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/")}
      className="back-btn h4 txt-light-slate-grey bg-transparent cursor-pointer border-none flex gap-4 items-center no-underline"
    >
      <ArrowLeft stroke="#4661E6" />
      Go Back
    </button>
  );
};

export default BackButton;
