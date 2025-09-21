// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

import Navbar from "./components/Navbar/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import Profile from "./pages/Profile/Profile";
import Assignments from "./pages/Assignments/Assignments";
import Attendance from "./pages/Attendance/Attendance";
import Events from "./pages/Events/Events";
import Students from "./pages/Students/Students";
import Logout from "./pages/Logout/Logout";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./pages/Login/Login";
import TeacherDashboard from "./pages/TeachersDashboard/TeacherDashboard";

const Layout = ({ children }) => {
  const { user } = useAuth();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar only when logged in */}
      {user && <Sidebar />}
      <div className="flex-1 flex flex-col">
        {/* Navbar always visible when logged in */}
        {user && <Navbar />}
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />

          {/* Student-only routes */}
          <Route
            path="/student"
            element={
              <ProtectedRoute role="student">
                <Layout>
                  <StudentDashboard />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/assignments"
            element={
              <ProtectedRoute role="student">
                <Layout>
                  <Assignments />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/attendance"
            element={
              <ProtectedRoute role="student">
                <Layout>
                  <Attendance />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute role="student">
                <Layout>
                  <Profile />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/events"
            element={
              <ProtectedRoute role="student">
                <Layout>
                  <Events />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* Teacher-only routes */}
          <Route
            path="/teacher"
            element={
              <ProtectedRoute role="teacher">
                <Layout>
                  <TeacherDashboard />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/students"
            element={
              <ProtectedRoute role="teacher">
                <Layout>
                  <Students />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* Catch-all: redirect to login */}
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
