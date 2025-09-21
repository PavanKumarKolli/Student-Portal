import { useAuth } from "../../context/AuthContext";
import { useState, useEffect } from "react";
import { FaBell } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const { user } = useAuth();
  const [time, setTime] = useState(new Date());
  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!user) return null;

  return (
    <>
      <nav className="navbar">
        {/* Left Side - Time */}
        <div className="navbar-time">
          {time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </div>

        {/* Center - Greeting */}
        <div className="navbar-greeting">
          👋 Hi, <span className="username">{user?.name}</span>
        </div>

        {/* Right Side - Profile + Notifications */}
        <div className="navbar-actions">
          <div
            className="notification-wrapper"
            onClick={() => setShowNotifications(true)}
          >
            <FaBell className="navbar-icon" title="Notifications" />
            <span className="notification-badge">3</span>
          </div>
          <img
            src={
              user?.profilePic ||
              "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }
            alt="Profile"
            className="navbar-profile"
            onClick={() => setShowProfile(true)}
          />
        </div>
      </nav>

      {/* Profile Modal */}
      {showProfile && (
        <div className="modal-overlay" onClick={() => setShowProfile(false)}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()} // prevent closing on content click
          >
            <h2>👤 User Details</h2>
            <img 
              src={
                user?.profilePic ||
                "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              }
              alt="Profile"
              className="modal-profile"
            />
            <p><strong>Name:</strong> {user?.name}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Role:</strong> {user?.role || "Teacher"}</p>
            <button onClick={() => setShowProfile(false)} className="close-btn">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Notification Modal */}
      {showNotifications && (
        <div className="modal-overlay" onClick={() => setShowNotifications(false)}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>🔔 Notifications</h2>
            <p>You don’t have any updates on your profile.</p>
            <button
              onClick={() => setShowNotifications(false)}
              className="close-btn"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
