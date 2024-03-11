import { toast } from "react-toastify";
import "./commentUpdateModal.css";
import { useState } from "react";
export interface Props {
  setUpdateComment: (value: React.SetStateAction<boolean>) => void;
}
const UpdateCommentModal = ({ setUpdateComment }: Props) => {
  const [text, setText] = useState<string>("this is so great");

  // From Submit Handler
  const formSubmitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (text.trim() === "") {
      return toast.error("Please enter a valid Comment!");
    }
    console.log({ text });
  };

  return (
    <div className="update-comment">
      <form onSubmit={formSubmitHandler} className="update-comment-form">
        <abbr title="close">
          <i
            onClick={() => setUpdateComment(false)}
            className="bi bi-x-circle-fill update-comment-form-close"
          ></i>
        </abbr>
        <h1 className="update-comment-title">Edit Comment</h1>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          className="update-comment-input"
          placeholder="Update Comment"
        />
        <button type="submit" className="update-comment-btn">
          Edit Comment
        </button>
      </form>
    </div>
  );
};

export default UpdateCommentModal;
