import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { useAuth } from "../../context/AuthContext";
import {
  FaHome,
  FaTasks,
  FaChartBar,
  FaUser,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  if (!user) return null;

  // Role-based links
  const studentLinks = [
    { path: "/student", label: "Dashboard", icon: <FaHome /> },
    { path: "/assignments", label: "Assignments", icon: <FaTasks /> },
    { path: "/attendance", label: "Attendance", icon: <FaChartBar /> },
    { path: "/profile", label: "Profile", icon: <FaUser /> },
    { path: "/events", label: "Events", icon: <FaCalendarAlt /> },
  ];

  const teacherLinks = [
    { path: "/teacher", label: "Dashboard", icon: <FaChalkboardTeacher /> },
    { path: "/students", label: "Students", icon: <FaUsers /> },
  ];

  const links = user.role === "student" ? studentLinks : teacherLinks;

  // Logout handler
  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to login
  };

  return (
    <>
      {/* -------- Desktop Sidebar -------- */}
      <aside className="sidebar desktop-only">
        <div className="sidebar-header">
          <h2 className="sidebar-title">✨ {user.role} Menu</h2>
        </div>

        <ul className="sidebar-links">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`sidebar-link ${
                  location.pathname === link.path ? "active" : ""
                }`}
              >
                <span className="icon">{link.icon}</span>
                <span className="label">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <button className="sidebar-logout-btn" onClick={handleLogout}>
          <FaSignOutAlt className="logout-icon" /> Logout
        </button>
      </aside>

      {/* -------- Mobile Bottom Navbar -------- */}
      <nav className="mobile-nav mobile-only">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`mobile-link ${
              location.pathname === link.path ? "active" : ""
            }`}
          >
            {link.icon}
          </Link>
        ))}

        <button
          className={`mobile-link logout ${
            location.pathname === "/" ? "active" : ""
          }`}
          onClick={handleLogout}
        >
          <FaSignOutAlt />
        </button>
      </nav>
    </>
  );
};

export default Sidebar;
