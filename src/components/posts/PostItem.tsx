import { Link } from "react-router-dom";
import { postInterface } from "../../redux/type";
import "./posts.css";
interface Props {
  post: postInterface;
}

const PostItem = ({ post }: Props) => {
  return (
    <div className="post-item">
      <div className="image-wrapper">
        <img src={post.image} alt="" className="post-image" />
      </div>
      <div className="post-info-wrapper">
        <div className="post-info">
          <div className="author-info">
            <strong>Author: </strong>
            <Link to="/profile/1" className="post-item-author">
              {post.user.username}
            </Link>
          </div>
          <div className="date-info">
            {new Date(post.createdAt).toLocaleDateString()}
          </div>
        </div>
        <div className="post-details">
          <h4 className="post-title">{post.title}</h4>
          <Link
            to={`/post/category/${post.category}`}
            className="post-category"
          >
            {post.category}
          </Link>
        </div>
        <p className="post-description">{post.description}</p>
        <Link className="post-link" to={`/post/details/${post._id}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostItem;
