"use client";
import { useRouter } from "next/navigation";
import BackButton from "../components/BackButton";
import { useSession } from "next-auth/react";

const Header = () => {
  const router = useRouter();
  const { status } = useSession();
  return (
    <header className="roadmap-page--header bg-midnight-navy flex justify-between">
      <div className="flex flex-col gap-1">
        <BackButton />
        <h1 className="h1 txt-white">Roadmap</h1>
      </div>
      <button
        onClick={() => router.push("/create")}
        disabled={status !== "authenticated"}
        className="btn btn-violet btn-small h4 grid items-center"
      >
        + Add Feedback
      </button>
    </header>
  );
};

export default Header;
