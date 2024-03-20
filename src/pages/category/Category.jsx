import { Link, useParams } from "react-router-dom";
import "./category.css";
import PostIList from "../../components/posts/PostIList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategoryPosts } from "../../redux/apiCalls/PostCall";
const Category = () => {
  const { postsCategory } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const { category } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchCategoryPosts(category));
  }, [dispatch, category]);

  return (
    <div className="category">
      {postsCategory.length === 0 ? (
        <>
          <h1 className="category-notfound">
            Category <span>{category}</span> Doesn't Have any Posts
          </h1>
          <Link className="category-link-notfound" to="/posts">
            Go To Posts
          </Link>
        </>
      ) : (
        <>
          <h1 className="category-title">Posts based on {category}</h1>
          <PostIList posts={postsCategory} />
        </>
      )}
    </div>
  );
};

export default Category;
