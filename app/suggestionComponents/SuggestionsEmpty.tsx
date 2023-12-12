import Image from "next/image";
import EmptyImage from "@/public/assets/suggestions/illustration-empty.svg";
import Link from "next/link";
const SuggestionsEmpty = () => {
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
        <Link href="" className="btn btn-small btn-violet mt-12 sm:mt-6">
          + Add Feedback
        </Link>
      </div>
    </div>
  );
};

export default SuggestionsEmpty;
 