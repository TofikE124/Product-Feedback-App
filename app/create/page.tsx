import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArrowLeft from "../svgs/ArrowLeft";
import PlusIcon from "@/public/assets/shared/icon-new-feedback.svg";
import TextField from "../components/TextField";

const page = () => {
  return (
    <div className="create-suggestion-page mt-24 mx-auto w-fit">
      <Link
        href=""
        className="h4 txt-light-slate-grey flex gap-4 items-center no-underline"
      >
        <ArrowLeft stroke="#4661E6" />
        Go Back
      </Link>
      <form className="form">
        <Image className="form-icon" src={PlusIcon} alt="plus icon" />
        <h1 className="h1 txt-dark-indigo mb-20">
          Editing ‘Add a dark theme option’
        </h1>
        <div className="mb-6">
          <h4 className="txt-dark-indigo h4">Feedback Title</h4>
          <p className="txt-light-slate-grey h4 fw-normal mb-4 ">
            Add a short, descriptive headline
          </p>
          <TextField placeholder="Please add a dark theme option" />
        </div>
        <div className="mb-6">
          <h4 className="txt-dark-indigo h4">Category</h4>
          <p className="txt-light-slate-grey h4 fw-normal mb-4 ">
            Choose a category for your feedback
          </p>
          <TextField placeholder="Feature" />
        </div>
        <div className="mb-6">
          <h4 className="txt-dark-indigo h4">Update Status</h4>
          <p className="txt-light-slate-grey h4 fw-normal mb-4 ">
            Change feedback state
          </p>
          <TextField placeholder="Planned" />
        </div>
        <div className="mb">
          <h4 className="txt-dark-indigo h4">Feedback Detail</h4>
          <p className="txt-light-slate-grey h4 fw-normal mb-4 ">
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <TextField placeholder="It would help people with light sensitivities and who prefer dark mode." />
        </div>
        <div className="flex mt-8">
          <button className="btn btn-small btn-red">Delete</button>
          <button className="btn btn-small btn-indigo ml-auto mr-4">
            Cancel
          </button>
          <button className="btn btn-small btn-violet">Add Feedback</button>
        </div>
      </form>
    </div>
  );
};

export default page;
