import React, { useState, useEffect } from "react";
import "./index.css";

const FixHealthLandingPage = ({ location }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  // const [city, setCity] = useState(
  //   location.search
  //     ? new URLSearchParams(location.search).get("city") || ""
  //     : ""
  // );
  const [city, setCity] = useState("");
  const [company, setCompany] = useState("");
  const [complaints, setComplaints] = useState("");
  const [experience, setExperience] = useState("No");
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    // Fetch doctors data from API (replace with actual API endpoint)
    const fetchDoctors = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        console.log({ data });
        setDoctors(data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };
    fetchDoctors();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    console.log("Form submitted:", {
      name,
      phone,
      age,
      city,
      company,
      complaints,
      experience,
      selectedDoctor,
    });
    alert("Form submitted successfully!");
    setPopup(false);
  };
  const handleClick = () => {
    setPopup(true);
  };
  const handleClose = () => {
    setPopup(false);
  };

  return (
    <div className="container">
      <section>
        <img
          className="image"
          src="/BusyDoctors_1200x666.jpg"
          alt="Hero Image"
        />
      </section>
      <section className="float">
        <nav className=" px-8 py-4 shadow-md  ">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-900">Fix Health</div>
            <div className="hidden md:flex items-center">
              {/* Navigation Links */}
              <a
                href="#services"
                className="text-gray-900 hover:text-green-900 px-4"
              >
                Services
              </a>
              <a
                href="#blogs"
                className="text-gray-900 hover:text-green-900 px-4"
              >
                Blogs
              </a>
              <a
                href="#about"
                className="text-gray-900 hover:text-green-900 px-4 "
              >
                About
              </a>
            
              <a
                href="#book"
                className="ml-4 inline-block text-white bg-blue-500 px-2 py-1 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={handleClick}
              >
                Book Now
              </a>
            </div>
          </div>
        </nav>
      </section>

      {popup && (
        <section>
          <form
            className=" fixed inset-0 border p-4 bg-blue-100"
            onSubmit={handleFormSubmit}
          >
            <div className="flex justify-between text-black">
              <h2>Consultation Booking</h2>
              <button onClick={handleClose}>X</button>
            </div>
            {/* ... (input fields for name, phone, age, city, company, complaints, experience, and doctors) */}
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <div>
                <label htmlFor="age">Age:</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="age">City:</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="company">Company:</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="complaints">Chief Complaints:</label>
                <input
                  type="text"
                  id="complaints"
                  name="complaints"
                  value={complaints}
                  onChange={(e) => setComplaints(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="experience"> Experience:</label>
                
                {age >= 40 ? (
                  <input
                    type="radio"
                    id="experience"
                    name="experience"
                    value="Yes"
                    onChange={(e) => setExperience(e.target.value)}
                  />
                ) : (
                  null
                )}
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>

              <label htmlFor="doctor">Best Available Doctors:</label>

              <select
                id="doctor"
                name="doctor"
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
              >
                <option value="">Select a doctor</option>
                {doctors.map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <input type="submit" value="Book Consultation" />
            </div>
          </form>
        </section>
      )}
    </div>
  );
};

export default FixHealthLandingPage;
