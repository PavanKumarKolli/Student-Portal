import "./Attendance.css";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const Attendance = () => {
  // Sample data
  const records = [
    { date: "2025-09-01", status: "Present", period: "1st" },
    { date: "2025-09-01", status: "Absent", period: "2nd" },
    { date: "2025-09-02", status: "Present", period: "1st" },
    { date: "2025-09-02", status: "Present", period: "2nd" },
    { date: "2025-09-03", status: "Absent", period: "1st" },
    { date: "2025-09-03", status: "Present", period: "2nd" },
  ];

  // Group by month and calculate summary
  const monthlyReport = records.reduce((acc, rec) => {
    const month = rec.date.slice(0, 7); // YYYY-MM
    if (!acc[month]) {
      acc[month] = { present: 0, absent: 0, total: 0 };
    }
    acc[month].total++;
    if (rec.status === "Present") acc[month].present++;
    else acc[month].absent++;
    return acc;
  }, {});

  const handleExport = () => {
    // Convert records to worksheet
    const worksheet = XLSX.utils.json_to_sheet(records);
    const summary = Object.entries(monthlyReport).map(([month, data]) => ({
      Month: month,
      Present: data.present,
      Absent: data.absent,
      Total: data.total,
    }));
    const summarySheet = XLSX.utils.json_to_sheet(summary);

    // Create workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Detailed Records");
    XLSX.utils.book_append_sheet(workbook, summarySheet, "Monthly Summary");

    // Export file
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "Attendance_Report.xlsx");
  };

  return (
    <div className="attendance-container">
      <div className="attendance-card">
        <h2 className="attendance-title">Attendance Record</h2>

        {/* Detailed Records */}
        <div className="table-wrapper">
          <table className="attendance-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Period</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {records.map((r, i) => (
                <tr key={i}>
                  <td>{r.date}</td>
                  <td>{r.period}</td>
                  <td>
                    <span
                      className={
                        r.status === "Present"
                          ? "status present"
                          : "status absent"
                      }
                    >
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Monthly Summary */}
        <h3 className="attendance-subtitle">Monthly Summary</h3>
        <div className="table-wrapper">
          <table className="attendance-table">
            <thead>
              <tr>
                <th>Month</th>
                <th>Present</th>
                <th>Absent</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(monthlyReport).map(([month, data], i) => (
                <tr key={i}>
                  <td>{month}</td>
                  <td>{data.present}</td>
                  <td>{data.absent}</td>
                  <td>{data.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="export-btn" onClick={handleExport}>
          📊 Download Excel Report
        </button>
      </div>
    </div>
  );
};

export default Attendance;
