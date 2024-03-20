import { Link, useParams } from "react-router-dom";
import "./postDetails.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AddComment from "../../../components/comments/AddComment";
import CommentList from "../../../components/comments/CommentList";
import UpdatePostModal from "../UpadatePostModel";

import { useDispatch, useSelector } from "react-redux";
import {
  ToggleLikeBtn,
  fetchSinglePost,
} from "../../../redux/apiCalls/PostCall";
const PostDetails = () => {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);
  const { id } = useParams();
  const [updatePost, setUpdatePost] = useState(false);
  const [file, setFile] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchSinglePost(id));
  }, [dispatch, id]);

  const updateImageSubmitHandler = (e) => {
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
          src={file ? URL.createObjectURL(file) : post?.image.url}
          alt=""
          className="post-detail-image"
        />
        {post?.user._id === user?._id && (
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
        )}
      </div>

      <h1 className="post-details-title">{post?.title}</h1>
      <div className="post-details-user-info">
        <img
          src={post?.user.profile_photo.url}
          alt=""
          className="post-details-user-image"
        />
        <div className="post-details-user">
          <strong>
            <Link to={`/profile/${post?.user?._id}`}>
              {post?.user.username}
            </Link>
          </strong>
          <span>{post?.createdAt}</span>
        </div>
      </div>
      <p className="post-details-description">{post?.description}</p>
      {post?.user._id === user?._id && (
        <div className="post-details-icon-wrapper">
          {user && (
            <div>
              <i
                className={
                  post?.likes.includes(user._id)
                    ? "bi bi-hand-thumbs-up-fill"
                    : "bi bi-hand-thumbs-up"
                }
                onClick={() => dispatch(ToggleLikeBtn(post?._id))}
              ></i>
              <small>{post?.likes.length} likes</small>
            </div>
          )}

          <div>
            <i
              onClick={() => setUpdatePost(true)}
              className="bi bi-pencil-square"
            ></i>
            <i onClick={deletePostHandler} className="bi bi-trash-fill"></i>
          </div>
        </div>
      )}
      {user ? (
        <AddComment />
      ) : (
        <div className="alert alert-danger">Can't Comment Without Login</div>
      )}
      <CommentList comments={post?.comments} />
      {updatePost && (
        <UpdatePostModal post={post} setUpdatePost={setUpdatePost} />
      )}
    </div>
  );
};

export default PostDetails;
