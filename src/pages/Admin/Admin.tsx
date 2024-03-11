import AdminMain from "./AdminMain";
import AdminSidebar from "./AdminSidebar";
import "./admin.css";

const Admin = () => {
  return (
    <section className="admin-dashboard">
      <AdminSidebar />
      <AdminMain />
    </section>
  );
};

export default Admin;
