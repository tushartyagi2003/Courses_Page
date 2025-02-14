import React, { useEffect, useState } from "react";
import "./CoursesList.css"; // Make sure to add styles for the progress bar here
import DashboardwithNavbar from "../DashboardWithNavbar";
import { useNavigate } from "react-router-dom"; 

const ProgressBar = ({ progress }) => (
  <div className="progress-container">
    <div className="progress-bar" style={{ width: `${progress}%` }}>
      {progress}%
    </div>
  </div>
);

const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/courses.json");
      const data = await response.json();
      setCourses(data);
    };

    fetchData();
  }, []);

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(search.toLowerCase()) ||
      course.instructor.toLowerCase().includes(search.toLowerCase())
  );



  const navigate = useNavigate();
  const ShowDetails = (courseId) => {
    navigate(`/CourseDetails/${courseId}`); // Pass courseId for dynamic routing (optional)
  };

  return (
    <>
      <div className="app-container">
      <h1>{<DashboardwithNavbar/>}</h1>
        <div className="search-section">
          <h1>Course List</h1>
          <input
            type="text"
            placeholder="Search by course name or instructor"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="course-grid">
          {filteredCourses.map((course) => (
            <div className="course-card" key={course.id}>
              <h2>{course.name}</h2>
              <p>
                <strong>Instructor:</strong> {course.instructor}
              </p>
              <p>
                <strong>Description:</strong> {course.description}
              </p>
              <p>
                <strong>Enrollment Status:</strong> {course.enrollmentStatus}
              </p>
              <p>
                <strong>Enrollment Progress:</strong>
              </p>
              <ProgressBar progress={course.progress} />
              <button
                className="view-button"
                onClick={() => ShowDetails(course.id)}               >
                View Details
              </button>
            </div>
          ))}
        </div>

        
      </div>
    </>
  );
};

export default CoursesList;
