import { FaLaptopCode, FaChalkboardTeacher, FaTheaterMasks } from "react-icons/fa";
import "./Events.css";

const Events = () => {
  const events = [
    {
      date: "2025-09-25",
      title: "Hackathon",
      time: "10:00 AM - 5:00 PM",
      icon: <FaLaptopCode className="event-icon hackathon" />,
      description: "A 7-hour coding marathon to solve real-world problems.",
    },
    {
      date: "2025-09-28",
      title: "Seminar",
      time: "2:00 PM - 4:00 PM",
      icon: <FaChalkboardTeacher className="event-icon seminar" />,
      description: "Industry experts sharing insights on Artificial Intelligence.",
    },
    {
      date: "2025-10-02",
      title: "Cultural Fest",
      time: "6:00 PM - 10:00 PM",
      icon: <FaTheaterMasks className="event-icon fest" />,
      description: "An evening full of dance, music, drama, and cultural performances.",
    },
  ];

  return (
    <div className="events-container">
      <h2 className="events-title">🎉 Upcoming Events</h2>
      <div className="events-grid">
        {events.map((e, i) => (
          <div key={i} className="event-card">
            {e.icon}
            <h3 className="event-title">{e.title}</h3>
            <p className="event-date">📅 {e.date}</p>
            <p className="event-time">⏰ {e.time}</p>
            <p className="event-desc">{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
