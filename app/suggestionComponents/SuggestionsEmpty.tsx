"use client";
import Image from "next/image";
import EmptyImage from "@/public/assets/suggestions/illustration-empty.svg";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Skeleton from "../components/Skeleton";

const SuggestionsEmpty = () => {
  const router = useRouter();
  const { status } = useSession();

  return (
    <div className="suggestions-page--main--empty">
      <div className="suggestions-page--main--empty--container flex flex-col items-center justify-center text-center">
        <div className="mb-14 sm:mb-9">
          <Image src={EmptyImage} alt="Person with magnifying glass" />
        </div>
        <h1 className="h1 txt-dark-indigo mb-4">There is no feedback yet.</h1>
        <p className="b1 light-slate-grey">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>

        {status === "loading" ? (
          <Skeleton height={42} width={172} />
        ) : (
          <button
            disabled={status === "unauthenticated"}
            onClick={() => router.push("/create")}
            className="btn btn-small btn-violet mt-12 sm:mt-6"
          >
            + Add Feedback
          </button>
        )}
      </div>
    </div>
  );
};

export default SuggestionsEmpty;
