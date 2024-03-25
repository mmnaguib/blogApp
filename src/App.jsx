import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import Posts from "./pages/posts/Posts";
import Admin from "./pages/admin/Admin";
import Footer from "./components/footer/Footer";
import CreatePost from "./pages/posts/create-post/CreatePost";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import PostDetails from "./pages/posts/post-details/PostDetails";
import Category from "./pages/category/Category.jsx";
import Profile from "./pages/profile/Profile";
import UsersTable from "./pages/admin/UsersTable";
import CategoriesTable from "./pages/admin/CategoriesTable";
import PostsTable from "./pages/admin/PostsTable";
import CommentsTable from "./pages/admin/CommentsTable";
import ForgotPassword from "./pages/forms/ForgotPassword";
import ResetPassword from "./pages/forms/ResetPassword";
import NotFound from "./pages/not-found/NotFound";
import { useSelector } from "react-redux";
import VerifyEmail from "./pages/verify-email/VerifyEmail";

function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/users/:userId/verify/:token"
          element={!user ? <VerifyEmail /> : <Navigate to="/" />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/posts" element={<Posts />} />
        <Route path="post">
          <Route
            path="create"
            element={user ? <CreatePost /> : <Navigate to="/" />}
          />
          <Route path="details/:id" element={<PostDetails />} />
          <Route path="category/:category" element={<Category />} />
        </Route>

        <Route path="profile/:id" element={<Profile />} />

        <Route path="/admin-dashboard">
          <Route
            index
            element={user?.isAdmin ? <Admin /> : <Navigate to="/" />}
          />
          <Route
            path="users-table"
            element={user?.isAdmin ? <UsersTable /> : <Navigate to="/" />}
          />
          <Route
            path="categories-table"
            element={user?.isAdmin ? <CategoriesTable /> : <Navigate to="/" />}
          />
          <Route
            path="posts-table"
            element={user?.isAdmin ? <PostsTable /> : <Navigate to="/" />}
          />
          <Route
            path="comments-table"
            element={user?.isAdmin ? <CommentsTable /> : <Navigate to="/" />}
          />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer theme="colored" position="top-center" />
    </BrowserRouter>
  );
}

export default App;
