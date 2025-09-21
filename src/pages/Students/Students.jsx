
import { useState } from "react";
import { motion } from "framer-motion";
import { studentsData } from "../../data/dummyData";
import "./Students.css"
const Students = () => {
  const [selectedSection, setSelectedSection] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered Students
  const filteredStudents = studentsData.filter((stu) => {
    const matchSection =
      selectedSection === "All" || stu.section === selectedSection;
    const matchSearch =
      stu.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stu.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchSection && matchSearch;
  });

  // CSV Export
  const handleExport = () => {
    const headers = [
      "Roll No",
      "Name",
      "Section",
      "Branch",
      "Phone",
      "Email",
      "Address",
      "Math",
      "DS",
      "DBMS",
      "OS",
    ];
    const rows = filteredStudents.map((stu) => [
      stu.rollNo,
      stu.name,
      stu.section,
      stu.branch,
      stu.phone,
      stu.email,
      stu.address,
      stu.marks.math,
      stu.marks.ds,
      stu.marks.dbms,
      stu.marks.os,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((row) => row.join(",")).join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = `${
      selectedSection === "All" ? "All_Sections" : selectedSection
    }_Report.csv`;
    link.click();
  };

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">📋 Student Records</h2>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-3">
          <select
            className="border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-orange-500"
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
          >
            <option value="All">All Sections</option>
            <option value="CSE-A">CSE-A</option>
            <option value="CSE-B">CSE-B</option>
            <option value="CSE-C">CSE-C</option>
            <option value="CSE-D">CSE-D</option>
          </select>

          <input
            type="text"
            placeholder="Search by Roll No / Name"
            className="border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-orange-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button
            onClick={handleExport}
            className="bg-orange-600 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-700 transition"
          >
            ⬇ Export CSV
          </button>
        </div>
      </div>

      {/* Student Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-3">Pic</th>
              <th className="p-3">Name</th>
              <th className="p-3">Roll No</th>
              <th className="p-3">Section</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Address</th>
              <th className="p-3">Math</th>
              <th className="p-3">DS</th>
              <th className="p-3">DBMS</th>
              <th className="p-3">OS</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((stu, idx) => (
                <tr
                  key={idx}
                  className="border-b hover:bg-orange-50 transition text-center"
                >
                  <td className="p-3">
                    <img
                      src={stu.pic}
                      alt={stu.name}
                      className="w-10 h-10 rounded-full mx-auto"
                    />
                  </td>
                  <td className="p-3 font-medium">{stu.name}</td>
                  <td className="p-3">{stu.rollNo}</td>
                  <td className="p-3">{stu.section}</td>
                  <td className="p-3">{stu.phone}</td>
                  <td className="p-3">{stu.address}</td>
                  <td className="p-3">{stu.marks.math}</td>
                  <td className="p-3">{stu.marks.ds}</td>
                  <td className="p-3">{stu.marks.dbms}</td>
                  <td className="p-3">{stu.marks.os}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="10"
                  className="p-4 text-center text-gray-500 italic"
                >
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default Students;
