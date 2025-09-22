// src/data/DummyData.js

export const sectionsData = [
  { name: "CSE-A", avg: 78, students: 40 },
  { name: "CSE-B", avg: 85, students: 38 },
  { name: "CSE-C", avg: 72, students: 42 },
  { name: "CSE-D", avg: 80, students: 35 },
];

export const studentsData = [
  {
    rollNo: "CSE-A-01",
    name: "Rohit Sharma",
    aadhar: "1234-5678-9012",
    phone: "9876543210",
    email: "rohit.sharma@example.com",
    gender: "Male",
    dob: "2004-05-12",
    fatherName: "Rajesh Sharma",
    motherName: "Sunita Sharma",
    pic: "https://randomuser.me/api/portraits/men/32.jpg",
    address: "Hyderabad, Telangana",
    section: "CSE-A",
    branch: "CSE",
    marks: { math: 85, ds: 78, dbms: 72, os: 80 },
    attendance: [
      { date: "2025-09-18", status: "Present" },
      { date: "2025-09-19", status: "Absent" },
      { date: "2025-09-20", status: "Present" },
      { date: "2025-09-21", status: "Present" },
      { date: "2025-09-22", status: "Present" },
    ],
  },
  {
    rollNo: "CSE-A-02",
    name: "Priya Verma",
    aadhar: "3456-7890-1234",
    phone: "9876543212",
    email: "priya.verma@example.com",
    gender: "Female",
    dob: "2004-08-22",
    fatherName: "Vinod Verma",
    motherName: "Anita Verma",
    pic: "https://randomuser.me/api/portraits/women/22.jpg",
    address: "Mumbai, Maharashtra",
    section: "CSE-A",
    branch: "CSE",
    marks: { math: 90, ds: 82, dbms: 88, os: 79 },
    attendance: [
      { date: "2025-09-18", status: "Present" },
      { date: "2025-09-19", status: "Present" },
      { date: "2025-09-20", status: "Present" },
      { date: "2025-09-21", status: "Absent" },
      { date: "2025-09-22", status: "Present" },
    ],
  },
  {
    rollNo: "CSE-B-05",
    name: "Ananya Singh",
    aadhar: "2345-6789-0123",
    phone: "9876543211",
    email: "ananya.singh@example.com",
    gender: "Female",
    dob: "2004-11-15",
    fatherName: "Rakesh Singh",
    motherName: "Meena Singh",
    pic: "https://randomuser.me/api/portraits/women/45.jpg",
    address: "Bengaluru, Karnataka",
    section: "CSE-B",
    branch: "CSE",
    marks: { math: 88, ds: 92, dbms: 81, os: 86 },
    attendance: [
      { date: "2025-09-18", status: "Present" },
      { date: "2025-09-19", status: "Present" },
      { date: "2025-09-20", status: "Present" },
      { date: "2025-09-21", status: "Present" },
      { date: "2025-09-22", status: "Absent" },
    ],
  },
  {
    rollNo: "CSE-C-03",
    name: "Vikram Rao",
    aadhar: "4567-8901-2345",
    phone: "9876543213",
    email: "vikram.rao@example.com",
    gender: "Male",
    dob: "2004-03-10",
    fatherName: "Suresh Rao",
    motherName: "Kavita Rao",
    pic: "https://randomuser.me/api/portraits/men/55.jpg",
    address: "Chennai, Tamil Nadu",
    section: "CSE-C",
    branch: "CSE",
    marks: { math: 70, ds: 65, dbms: 78, os: 72 },
    attendance: [
      { date: "2025-09-18", status: "Absent" },
      { date: "2025-09-19", status: "Present" },
      { date: "2025-09-20", status: "Present" },
      { date: "2025-09-21", status: "Present" },
      { date: "2025-09-22", status: "Present" },
    ],
  },
  {
    rollNo: "CSE-D-01",
    name: "Sneha Patil",
    aadhar: "5678-9012-3456",
    phone: "9876543214",
    email: "sneha.patil@example.com",
    gender: "Female",
    dob: "2004-12-05",
    fatherName: "Manoj Patil",
    motherName: "Sunita Patil",
    pic: "https://randomuser.me/api/portraits/women/30.jpg",
    address: "Pune, Maharashtra",
    section: "CSE-D",
    branch: "CSE",
    marks: { math: 82, ds: 79, dbms: 85, os: 88 },
    attendance: [
      { date: "2025-09-18", status: "Present" },
      { date: "2025-09-19", status: "Present" },
      { date: "2025-09-20", status: "Absent" },
      { date: "2025-09-21", status: "Present" },
      { date: "2025-09-22", status: "Present" },
    ],
  },
];

export const events = [
  { date: "2025-09-25", title: "Hackathon" },
  { date: "2025-09-28", title: "Seminar" },
  { date: "2025-10-02", title: "Cultural Fest" },
  { date: "2025-10-05", title: "Guest Lecture" },
  { date: "2025-10-10", title: "Sports Day" },
];

export const performanceData = [
  { name: "CSE-A", avg: 78 },
  { name: "CSE-B", avg: 85 },
  { name: "CSE-C", avg: 72 },
  { name: "CSE-D", avg: 80 },
];
// src/data/dummyData.js

// export const dummyUser = {
//   name: "John Doe",
//   profilePic: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
// };

export const dummyAttendance = [
  { month: "Jan", attendance: 75 },
  { month: "Feb", attendance: 80 },
  { month: "Mar", attendance: 78 },
  { month: "Apr", attendance: 85 },
  { month: "May", attendance: 90 },
  { month: "Jun", attendance: 88 },
];

export const dummyEvents = [
  {
    date: "25 Sept",
    title: "Hackathon 🖥️",
    details:
      "Join our 24-hour coding Hackathon to build innovative solutions. Open to all students.",
  },
  {
    date: "28 Sept",
    title: "Seminar 🎤",
    details:
      "Attend the seminar on AI and Machine Learning with industry experts.",
  },
  {
    date: "30 Sept",
    title: "Workshop 🛠️",
    details:
      "Hands-on workshop on Web Development using React.js and Node.js.",
  },
];
