import { useState } from "react";
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
// import { dummyUser, dummyAttendance, dummyEvents } from "../../data/dummyData";
import "./StudentDashboard.css";
import { dummyAttendance, dummyEvents } from "../../data/dummyData";
import { students } from "../../data/students";


const StudentDashboard = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const latestAttendance =
    dummyAttendance[dummyAttendance.length - 1]?.attendance || 0;

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
          // src={students.profilepic}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUap_zjVTvyxIREha9IvJfUqdj5wMe-FRLZ5T8i1MckH49NxPvPBnXHGCsfUIiWuF30lI&usqp=CAU"
            alt="Profile"
            className="dashboard-profile-pic"
          />
          <div className="header-text">
            <h2>
              Welcome, <span>{students.name}</span> 👋
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
              <LineChart data={dummyAttendance}>
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
            {dummyEvents.map((event, index) => (
              <div
                key={index}
                className="event-item"
                onClick={() => setSelectedEvent(event)}
                style={{ cursor: "pointer" }}
              >
                <span className="event-date">{event.date}</span>
                <span className="event-title">{event.title}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedEvent(null)}
        >
          <motion.div
            className="modal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedEvent.title}</h2>
            <p>{selectedEvent.details}</p>
            <button className="close-btn" onClick={() => setSelectedEvent(null)}>
              Close
            </button>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default StudentDashboard;
