import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ categories }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-title">categories</div>
      <ul className="sidebar-links">
        {categories.map((category) => (
          <Link
            className="sidebar-link"
            key={category._id}
            to={`/post/category/${category.title}`}
          >
            {category.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
