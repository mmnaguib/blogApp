import "./upadatePostModel.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetchCategories } from "../../redux/apiCalls/CategoryCall";
import { updatePost } from "../../redux/apiCalls/PostCall";

const UpdatePostModal = ({ setUpdatePost, post }) => {
  const [title, setTitle] = useState(post?.title);
  const [description, setDescription] = useState(post?.description);
  const [category, setCategory] = useState(post?.category);
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  // From Submit Handler
  const formSubmitHandler = (e) => {
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
    dispatch(updatePost(post?.id, { title, description, category }));
    setUpdatePost(false);
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
          {categories.map((category) => (
            <option>{category.title}</option>
          ))}
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
