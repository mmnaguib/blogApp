import "./upadatePostModel.css";
import { useState } from "react";
import { postInterface } from "../../redux/type";
import { toast } from "react-toastify";
interface Props {
  post: postInterface | undefined;
  setUpdatePost: (value: React.SetStateAction<boolean>) => void;
}
const UpdatePostModal = ({ setUpdatePost, post }: Props) => {
  const [title, setTitle] = useState<string>(post?.title || "");
  const [description, setDescription] = useState<string>(
    post?.description || ""
  );
  const [category, setCategory] = useState<string>(post?.category || "");
  // From Submit Handler
  const formSubmitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (title.trim() === "") {
      return toast.error("Please enter a valid title!");
    }
    if (category.trim() === "") {
      return toast.error("Please enter a valid Category!");
    }
    if (description.trim() === "") {
      return toast.error("Please enter a valid Description!");
    }
    console.log({ title, description, category });
  };

  return (
    <div className="update-post">
      <form onSubmit={formSubmitHandler} className="update-post-form">
        <abbr title="close">
          <i
            onClick={() => setUpdatePost(false)}
            className="bi bi-x-circle-fill update-post-form-close"
          ></i>
        </abbr>
        <h1 className="update-post-title">Update Post</h1>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          className="update-post-input"
        />
        <select
          className="update-post-input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option disabled value="">
            Select A Category
          </option>
          <option value="music">music</option>
          <option value="travelling">travelling</option>
          <option value="drinks">drinks</option>
        </select>
        <textarea
          className="update-post-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit" className="update-post-btn">
          Update Post
        </button>
      </form>
    </div>
  );
};

export default UpdatePostModal;
