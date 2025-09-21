import { useAuth } from "../../context/AuthContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  const { user } = useAuth();

  const attendanceData = [
    { month: "Jan", attendance: 75 },
    { month: "Feb", attendance: 80 },
    { month: "Mar", attendance: 78 },
    { month: "Apr", attendance: 85 },
    { month: "May", attendance: 90 },
    { month: "Jun", attendance: 88 },
  ];

  const latestAttendance =
    attendanceData[attendanceData.length - 1]?.attendance || 0;

  return (
    <motion.div
      className="student-dashboard"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <img
            src={
              user?.profilePic ||
              "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }
            alt="Profile"
            className="dashboard-profile-pic"
          />
          <div className="header-text">
            <h2>
              Welcome, <span>{user?.name}</span> 👋
            </h2>
            <p>Your personalized academic dashboard</p>
          </div>
        </div>
      </header>

      {/* Dashboard Grid */}
      <div className="dashboard-grid">
        {/* Attendance */}
        <motion.div
          className="card attendance-card"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h3>📊 Attendance Report</h3>
          <div className="attendance-chart-wrapper">
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="month" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f1f1f",
                    border: "1px solid #f36100",
                    borderRadius: "8px",
                  }}
                  labelStyle={{ color: "#f36100" }}
                />
                <Line
                  type="monotone"
                  dataKey="attendance"
                  stroke="#f36100"
                  strokeWidth={3}
                  dot={{
                    r: 6,
                    fill: "#1e1e1e",
                    stroke: "#f36100",
                    strokeWidth: 2,
                  }}
                  activeDot={{
                    r: 8,
                    stroke: "#f36100",
                    strokeWidth: 3,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="attendance-summary">
            Current Attendance: <span>{latestAttendance}%</span>
          </p>
        </motion.div>

        {/* Events */}
        <motion.div
          className="card events-card"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h3>📅 Upcoming Events</h3>
          <div className="events-list">
            <div className="event-item">
              <span className="event-date">25 Sept</span>
              <span className="event-title">Hackathon 🖥️</span>
            </div>
            <div className="event-item">
              <span className="event-date">28 Sept</span>
              <span className="event-title">Seminar 🎤</span>
            </div>
            <div className="event-item">
              <span className="event-date">30 Sept</span>
              <span className="event-title">Workshop 🛠️</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StudentDashboard;
