import { Link, useParams } from "react-router-dom";
import "./postDetails.css";
import { posts } from "../../../dummyData";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AddComment from "../../../components/comments/AddComment";
import CommentList from "../../../components/comments/CommentList";
const PostDetails = () => {
  const { id } = useParams();
  const post = posts.find((p) => p._id === parseInt(id || ""));
  const [updatePost, setUpdatePost] = useState(false);
  const [file, setFile] = useState<File | null | undefined>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateImageSubmitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!file) return toast.warning("there is no file!");

    console.log("image uploaded successfully");
  };
  const deletePostHandler = () => {};
  return (
    <div className="post-details-section">
      <div className="post-details-image-wrapper">
        {/* <img src={post?.image} alt="" className="post-detail-image" /> */}
        <img
          src={file ? URL.createObjectURL(file) : post?.image}
          alt=""
          className="post-detail-image"
        />
        <form
          onSubmit={updateImageSubmitHandler}
          className="update-post-image-form"
        >
          <label htmlFor="file" className="update-post-image">
            <i className="bi bi-image-fill"></i> select new image
          </label>
          <input
            style={{ display: "none" }}
            type="file"
            name="file"
            id="file"
            onChange={(e) => setFile(e.target.files?.[0])}
          />
          <button type="submit">Upload</button>
        </form>
      </div>

      <h1 className="post-details-title">{post?.title}</h1>
      <div className="post-details-user-info">
        <img
          src={post?.user.image}
          alt=""
          className="post-details-user-image"
        />
        <div className="post-details-user">
          <strong>
            <Link to="/profile/1">{post?.user.username}</Link>
          </strong>
          <span>{post?.createdAt}</span>
        </div>
      </div>
      <p className="post-details-description">
        {post?.description} ... Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Incidunt quis a omnis aut sit earum atque eveniet
        ratione sint animi illo id accusamus obcaecati dolore voluptatibus
        aperiam qui, provident fuga? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Quibusdam neque odit soluta? Fugiat, dolores!
        Laboriosam rem quod, explicabo similique aliquam unde sed vel
        distinctio, fugiat ab aperiam odio nesciunt quas?
      </p>
      <div className="post-details-icon-wrapper">
        <div>
          <i className="bi bi-hand-thumbs-up"></i>
          <small>{post?.likes.length} likes</small>
        </div>
        <div>
          <i
            // onClick={() => setUpdatePost(true)}
            className="bi bi-pencil-square"
          ></i>
          <i onClick={deletePostHandler} className="bi bi-trash-fill"></i>
        </div>
      </div>
      <AddComment />
      <CommentList />
    </div>
  );
};

export default PostDetails;
