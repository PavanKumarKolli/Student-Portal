import { useAuth } from "../../context/AuthContext";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import "./layout.css";

const Layout = ({ children }) => {
  const { user } = useAuth();

  return (
    <div className="layout">
      {/* Sidebar */}
      {user && (
        <aside className="layout-sidebar">
          <Sidebar />
        </aside>
      )}

      {/* Main content area */}
      <div className="layout-main">
        {/* Navbar */}
        <header className="layout-navbar">
          <Navbar />
        </header>

        {/* Page content */}
        <main className="layout-content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
