import { Link } from "react-router-dom";
import "./posts.css";

const PostItem = ({ post }) => {
  return (
    <div className="post-item">
      <div className="image-wrapper">
        <img src={post?.image.url} alt="" className="post-image" />
      </div>
      <div className="post-info-wrapper">
        <div className="post-info">
          <div className="author-info">
            <strong>Author: </strong>
            <Link
              to={`/profile/${post?.user._id}`}
              className="post-item-author"
            >
              {post?.user.username}
            </Link>
          </div>
          <div className="date-info">
            {new Date(post?.createdAt).toLocaleDateString()}
          </div>
        </div>
        <div className="post-details">
          <h4 className="post-title">{post?.title}</h4>
          <Link
            to={`/post/category/${post?.category}`}
            className="post-category"
          >
            {post?.category}
          </Link>
        </div>
        <p className="post-description">{post?.description}</p>
        <Link className="post-link" to={`/post/details/${post?._id}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostItem;
