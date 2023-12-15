"use client";
import TextField from "@/app/components/TextField";
import { Comment as CommentType, User } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import moment from "moment";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type CommentWithPublisherAndTagged = {
  publisher: User;
  taggedUser: User | null;
} & CommentType;
// type CommentWithChildren = {
//   childComments: CommentWithPublisher[];
// } & CommentWithPublisher;

interface Props {
  comment: CommentWithPublisherAndTagged;
  user: User;
  suggestionId: number;
}
const Comment = ({ comment, user, suggestionId }: Props) => {
  const [isReplying, setReplying] = useState(false);
  const [value, setValue] = useState("");

  const router = useRouter();

  const handleChange = (value: string) => {
    if (value.length > 250) return;
    setValue(value);
  };

  const handlePostReply = () => {
    axios
      .post("/api/comments", {
        content: value,
        suggestionId,
        taggedUserId: user.id,
        parentId: comment.parentId || comment.id,
      })
      .then((res) => {
        router.refresh();
        setReplying(false);
      })
      .catch((err) => {
        toast.error("Couldn't post reply");
        setReplying(false);
      });
  };

  return (
    <div className="comment">
      <div className="details flex gap-2">
        <h4 className="user-name h4 txt-dark-indigo">{user.name}</h4>
        <p className="comment-date b2 txt-light-slate-grey">
          {moment(comment.createdAt).fromNow()}
        </p>
      </div>

      <Image
        className="user-icon"
        src={user.image || "https://i.stack.imgur.com/34AD2.jpg"}
        width={40}
        height={40}
        alt="Profile picture"
      />
      <div className="content flex gap-2">
        <p className="txt-levender-violet fw-bold inline cursor-pointer">
          {comment.taggedUser ? `@${comment.taggedUser.name}` : ""}{" "}
        </p>
        <p className="b2 txt-light-slate-grey">{comment.content}</p>
      </div>
      <button
        onClick={() => setReplying(!isReplying)}
        className="reply b3  bg-transparent border-none txt-medium-blue fw-medium cursor-pointer hover:underline "
      >
        Reply
      </button>
      {isReplying && (
        <div className="reply-section">
          <TextField
            value={value}
            onChange={(value) => handleChange(value)}
            isMultiline={true}
          />
          <div className="buttons-container flex flex-col gap-3">
            <button
              onClick={handlePostReply}
              className="h4 btn btn-small btn-violet w-max"
            >
              Post Reply
            </button>
            <button
              onClick={() => setReplying(false)}
              className="h4 btn btn-small btn-red w-max"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;
