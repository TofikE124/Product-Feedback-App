"use client";
import axios from "axios";
import { useState } from "react";
import TextField from "../components/TextField";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const PostCommentSection = ({ suggestionId }: { suggestionId: number }) => {
  const [value, setValue] = useState("");
  const maxChars = 250;

  const handleChange = (newValue: string) => {
    if (newValue.length > maxChars) return;
    setValue(newValue);
  };
  const router = useRouter();

  const handlePost = () => {
    axios
      .post("/api/comments", { content: value, suggestionId })
      .then(() => {
        router.refresh();
      })
      .catch((err) => {
        toast.error("Couldn't post comment");
      });
  };

  return (
    <div className="create-comment-section">
      <form>
        <div className="create-comment-section--container">
          <h3 className="h3 txt-dark-indigo mb-6">Add Comment</h3>
          <TextField
            value={value}
            onChange={(value) => handleChange(value)}
            isMultiline={true}
          />
          <div className="flex justify-between items-center mt-7">
            <p className="b2 txt-light-slate-grey">
              {maxChars - value.length} characters left
            </p>
            <button onClick={handlePost} className="btn btn-small btn-violet">
              Post Comment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostCommentSection;
