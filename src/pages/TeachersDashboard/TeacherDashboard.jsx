import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import "./TeacherDashboard.css";
import { sectionsData, studentsData } from "../../data/dummyData";

const TeacherDashboard = () => {
  const { user } = useAuth();
  const [selectedSection, setSelectedSection] = useState("All");

  // Filter students based on section
  const filteredStudents =
    selectedSection === "All"
      ? studentsData
      : studentsData.filter((s) => s.section === selectedSection);

  // Generate CSV report
  const generateReport = () => {
    const rows = [
      ["Name", "Roll No", "Aadhar", "Phone", "Address", "Section", "Branch"],
      ...filteredStudents.map((s) => [
        s.name,
        s.rollNo,
        s.aadhar,
        s.phone,
        s.address,
        s.section,
        s.branch,
      ]),
    ];
    const csvContent =
      "data:text/csv;charset=utf-8," +
      rows.map((r) => r.join(",")).join("\n");
    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = `${selectedSection}_report.csv`;
    link.click();
  };

  return (
    <motion.div
      className="teacher-dashboard"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.header
        className="dashboard-header"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>
          Welcome, <span className="highlight">{user?.name}</span> 👨‍🏫
        </h2>
        <p>Here’s your class performance summary</p>
      </motion.header>

      {/* Filter & Report */}
      <div className="filter-bar">
        <select
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value)}
        >
          <option value="All">All Sections</option>
          {sectionsData.map((sec, i) => (
            <option key={i} value={sec.name}>
              {sec.name}
            </option>
          ))}
        </select>
        <button onClick={generateReport}>⬇ Generate Report</button>
      </div>

      {/* Stats Section */}
      <div className="stats-grid">
        {sectionsData.map((sec, index) => (
          <motion.div
            key={index}
            className="card stat-card"
            whileHover={{ scale: 1.05 }}
          >
            <h4>{sec.name}</h4>
            <p>
              <span>{sec.students}</span> Students
            </p>
            <p>Avg: {sec.avg}%</p>
          </motion.div>
        ))}
      </div>

      {/* Performance Chart */}
      <motion.div
        className="card performance-card"
        whileHover={{
          scale: 1.04,
          boxShadow: "0 10px 25px rgba(243,97,0,0.25)",
        }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <h3>📊 Overall Performance</h3>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={sectionsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip cursor={{ fill: "rgba(243,97,0,0.05)" }} />
            <Legend />
            <Bar dataKey="avg" fill="url(#colorOrange)" radius={[8, 8, 0, 0]} />
            <defs>
              <linearGradient id="colorOrange" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f36100" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#f36100" stopOpacity={0.5} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Student Details */}
      <div className="card student-card">
        <h3>📋 Student Details ({selectedSection})</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Pic</th>
                <th>Name</th>
                <th>Roll No</th>
                <th>Aadhar</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Section</th>
                <th>Branch</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((stu, idx) => (
                <tr key={idx}>
                  <td>
                    <img src={stu.pic} alt={stu.name} className="student-pic" />
                  </td>
                  <td>{stu.name}</td>
                  <td>{stu.rollNo}</td>
                  <td>{stu.aadhar}</td>
                  <td>{stu.phone}</td>
                  <td>{stu.address}</td>
                  <td>{stu.section}</td>
                  <td>{stu.branch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Attendance Report */}
      <div className="card attendance-card">
        <h3>📅 Attendance Report ({selectedSection})</h3>
        {filteredStudents.map((stu, idx) => (
          <div key={idx} className="attendance-section">
            <h4>
              {stu.name} ({stu.rollNo})
            </h4>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {stu.attendance.map((att, i) => (
                    <tr key={i}>
                      <td>{att.date}</td>
                      <td
                        className={
                          att.status === "Present" ? "present" : "absent"
                        }
                      >
                        {att.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TeacherDashboard;
