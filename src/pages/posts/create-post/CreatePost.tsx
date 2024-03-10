import { useState } from "react";
import "./create-post.css";
import { toast } from "react-toastify";

const CreatePost = () => {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [file, setFile] = useState<File | null | undefined>(null);

  const formHandler = (e: { preventDefault: () => void }) => {
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
    console.log(formData);
  };
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
          <option>music</option>
          <option>coffee</option>
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
          Create
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
