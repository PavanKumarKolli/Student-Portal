import { FaCheckCircle, FaClock, FaExclamationTriangle } from "react-icons/fa";
import "./Assignments.css";

const Assignments = () => {
  const assignments = [
    { id: 1, title: "DSA Homework", due: "22 Sept 2025", status: "Pending" },
    { id: 2, title: "DBMS Project", due: "25 Sept 2025", status: "Submitted" },
    { id: 3, title: "OS Lab Report", due: "20 Sept 2025", status: "Pending" }, 
    {id:4, title:"JAva Lab Report", due:"15 Aug 2025", status:"Submitted"}
  ];

  // Convert date string to Date object
  const parseDate = (dateStr) => new Date(Date.parse(dateStr));
  const today = new Date();

  const getStatusBadge = (status) => {
    if (status === "Submitted") {
      return (
        <span className="status-badge submitted">
          <FaCheckCircle /> Submitted
        </span>
      );
    }
    if (status === "Pending") {
      return (
        <span className="status-badge pending">
          <FaClock /> Pending
        </span>
      );
    }
    return <span className="status-badge default">{status}</span>;
  };

  const isDeadlineDanger = (dueDate) => {
    const due = parseDate(dueDate);
    return due <= today; // due today or overdue
  };

  return (
    <div className="assignments-page">
      <h2 className="assignments-title"> My Assignments</h2>

      <div className="assignments-list">
        {assignments.map((a) => {
          const danger = isDeadlineDanger(a.due);

          return (
            <div
              key={a.id}
              className={`assignment-card ${danger ? "danger" : "safe"}`}
            >
              {/* Card Header */}
              <div className={`assignment-card-header ${danger ? "danger" : "safe"}`}>
                <h3>{a.title}</h3>
              </div>

              {/* Card Body */}
              <div className="assignment-card-body">
                <p>
                  📅 <span className="due-date">{a.due}</span>
                </p>
                {getStatusBadge(a.status)}

                {danger && (
                  <span className="deadline-badge">
                    <FaExclamationTriangle /> Deadline Approaching!
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Assignments;
