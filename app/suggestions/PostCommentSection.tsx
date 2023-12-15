"use client";
import axios from "axios";
import { useState } from "react";
import TextField from "../components/TextField";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Spinner from "../components/Spinner";
import { useSession } from "next-auth/react";
import Skeleton from "../components/Skeleton";

const PostCommentSection = ({ suggestionId }: { suggestionId: number }) => {
  const [isLoading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const maxChars = 250;

  const handleChange = (newValue: string) => {
    if (newValue.length > maxChars) return;
    setValue(newValue);
  };
  const router = useRouter();

  const { status } = useSession();

  const handlePost = () => {
    setLoading(true);
    axios
      .post("/api/comments", { content: value, suggestionId })
      .then(() => {
        router.refresh();
      })
      .catch((err) => {
        toast.error("Couldn't post comment");
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (status === "loading")
    return (
      <div className="create-comment-section">
        <div className="create-comment-section-container">
          <Skeleton width="97%" height={250} />
        </div>
      </div>
    );
  if (status === "unauthenticated") return null;

  return (
    <div className="create-comment-section div-container">
      <form>
        <div className="create-comment-section--container">
          <h3 className="h3 txt-dark-indigo mb-6">Add Comment</h3>
          <TextField
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            isMultiline={true}
          />
          <div className="flex justify-between items-center mt-7">
            <p className="b2 txt-light-slate-grey">
              {maxChars - value.length} characters left
            </p>
            <button onClick={handlePost} className="btn btn-small btn-violet">
              {isLoading ? <Spinner /> : "Post Comment"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostCommentSection;
