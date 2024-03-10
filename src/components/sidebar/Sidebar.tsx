import "./sidebar.css";
import { categoryInterface } from "../../redux/type";
import { Link } from "react-router-dom";

interface Props {
  categories: categoryInterface[];
}
const Sidebar = ({ categories }: Props) => {
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
