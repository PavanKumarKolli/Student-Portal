import { useState } from "react";
import { FaEdit } from "react-icons/fa"; // ⬅️ Pencil icon
import "./Profile.css";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Ojas Gambheera",
    regNo: "REG21082001",
    rollNo: "CSE123",
    email: "og@example.com",
    dob: "2001-08-21",
    city: "Hyderabad",
    status: "Active",
    profilePic: "https://www.ntvenglish.com/wp-content/uploads/2024/08/og.jpg", 
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile({ ...profile, profilePic: URL.createObjectURL(file) });
    }
  };

  const handleSave = () => {
    alert("Profile Updated Successfully!");
    console.log(profile);
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">My Profile</h2>

      <div className="profile-wrapper">
        {/* Profile Picture with edit icon */}
        <div className="profile-pic-wrapper">
          <div className="profile-pic-container">
            <img
              src={profile.profilePic}
              alt="Profile"
              className="profile-pic"
            />
            <label className="edit-icon">
              <FaEdit />
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Profile Form */}
        <div className="profile-form">
          <div>
            <label className="profile-label">Full Name</label>
            <input
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="profile-input"
            />
          </div>
          <div>
            <label className="profile-label">Registration No</label>
            <input
              name="regNo"
              value={profile.regNo}
              onChange={handleChange}
              className="profile-input"
            />
          </div>
          <div>
            <label className="profile-label">Roll No</label>
            <input
              name="rollNo"
              value={profile.rollNo}
              onChange={handleChange}
              className="profile-input"
            />
          </div>
          <div>
            <label className="profile-label">Email</label>
            <input
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="profile-input"
            />
          </div>
          <div>
            <label className="profile-label">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={profile.dob}
              onChange={handleChange}
              className="profile-input"
            />
          </div>
          <div>
            <label className="profile-label">City</label>
            <input
              name="city"
              value={profile.city}
              onChange={handleChange}
              className="profile-input"
            />
          </div>
          <div>
            <label className="profile-label">Current Status</label>
            <select
              name="status"
              value={profile.status}
              onChange={handleChange}
              className="profile-select"
            >
              <option value="Active">Active</option>
              <option value="Alumni">Alumni</option>
              <option value="On Leave">On Leave</option>
            </select>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-6 text-center">
        <button onClick={handleSave} className="save-btn">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Profile;
