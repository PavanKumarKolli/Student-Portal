import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaUserGraduate } from "react-icons/fa";

import "./Login.css";
import { students } from "../../data/students";   
import { teachers } from "../../data/teachers";   
const Login = () => {
  const [role, setRole] = useState("student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === "student") {
      const student = students.find(
        (s) => s.username === username && s.password === password
      );
      if (student) {
        localStorage.setItem(
          "user",
          JSON.stringify({ ...student, role: "student" })
        );
        navigate("/student"); 
      } else {
        alert("❌ Invalid Student Credentials!");
      }
    } else if (role === "teacher") {
      const teacher = teachers.find(
        (t) => t.username === username && t.password === password
      );
      if (teacher) {
        localStorage.setItem(
          "user",
          JSON.stringify({ ...teacher, role: "teacher" })
        );
        navigate("/teacher"); 
      } else {
        alert("❌ Invalid Teacher Credentials!");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <FaUserGraduate className="login-icon" />
          <h2>Welcome Back</h2>
          <p>Please login to your account</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          {/* Role */}
          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>

          {/* Username */}
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* Password with Eye Toggle */}
          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="eye-icon"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Submit */}
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
