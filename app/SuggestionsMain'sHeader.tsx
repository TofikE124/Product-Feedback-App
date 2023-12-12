import Image from "next/image";
import DropdownList from "./components/DropdownList/DropdownList";
import DropdownOption from "./components/DropdownList/DropdownOption";
import SuggestionsIcon from "@/public/assets/suggestions/icon-suggestions.svg";

const SuggestionsMainHeader = () => {
  return (
    <div className="suggestions-page--main--header flex items-center">
      <Image
        className="suggestions-page--main--header-suggestions-icon"
        src={SuggestionsIcon}
        alt="Suggestions Icon"
      />
      <h3 className="suggestions-page--main--header-suggestions-number h3 txt-white ml-4 mr-9">
        6 Suggestions
      </h3>
      <DropdownList defaultValue="Most Upvotes">
        <DropdownOption>Most Upvotes</DropdownOption>
        <DropdownOption>Least Upvotes</DropdownOption>
        <DropdownOption>Most Comments</DropdownOption>
        <DropdownOption>Least Comments</DropdownOption>
      </DropdownList>
      <button className="btn btn-small btn-violet ml-auto h4">
        + Add Feedback
      </button>
    </div>
  );
};

export default SuggestionsMainHeader;