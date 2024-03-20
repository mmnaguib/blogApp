import { useEffect, useState } from "react";
import "./create-post.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createNewPost } from "../../../redux/apiCalls/PostCall";
import { useNavigate } from "react-router-dom";
import { fetchCategories } from "../../../redux/apiCalls/CategoryCall";
import { ClipLoader } from "react-spinners";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const { loading, isPostCreated } = useSelector((state) => state.post);
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  const formHandler = (e) => {
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
    if (!file) {
      return toast.error("Please enter a valid File!");
    }
    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);
    // API call here
    dispatch(createNewPost(formData));
  };
  useEffect(() => {
    if (isPostCreated) {
      navigate("/");
    }
  }, [isPostCreated, navigate]);

  return (
    <section className="create-post-section">
      <h1 className="createPost-title">Create New Post</h1>
      <form onSubmit={formHandler} className="create-post-form">
        <input
          type="text"
          placeholder="Title"
          className="create-post-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <select
          className="create-post-input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option disabled value="">
            Select Category
          </option>
          {categories.map((category) => (
            <option>{category.title}</option>
          ))}
        </select>
        <textarea
          className="create-post-textarea"
          placeholder="Post Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <input
          type="file"
          id="file"
          name="file"
          className="create-post-upload"
          onChange={(e) => setFile(e.target.files?.[0])}
          required
        />
        <button type="submit" className="create-post-btn">
          {loading ? <ClipLoader color="#fff" /> : "Create"}
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
