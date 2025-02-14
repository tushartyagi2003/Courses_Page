import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const arr = [ {
    "id": 1,
    "name": "Introduction to React",
    "instructor": "John Doe",
    "description": "Learn the basics of React, including components, state, and props.",
    "enrollmentStatus": "In Progress",
    "duration": "6 weeks",
    "progress": 65,
    "duedate": "2021-12-15",
    "schedule": "Mon & Wed, 6 PM - 8 PM",
    "location": "Online",
    "prerequisites": "Basic knowledge of JavaScript",
    "syllabus": [
      "Week 1: Introduction to React",
      "Week 2: Components and Props",
      "Week 3: State and Lifecycle",
      "Week 4: Handling Events",
      "Week 5: React Router",
      "Week 6: Final Project"
    ]
  },
  {
    "id": 2,
    "name": "Advanced JavaScript",
    "instructor": "Jane Smith",
    "description": "Deep dive into advanced JavaScript concepts like closures, prototypes, and async programming.",
    "enrollmentStatus": "In Progress",
    "duration": "8 weeks",
    "progress": 45,
    "duedate": "2021-12-15",
    "schedule": "Tue & Thu, 7 PM - 9 PM",
    "location": "Room 204, Main Building",
    "prerequisites": "Intermediate JavaScript knowledge",
    "syllabus": [
      "Week 1: Advanced Functions",
      "Week 2: Closures and Scope",
      "Week 3: Prototypes and Inheritance",
      "Week 4: Asynchronous JavaScript",
      "Week 5: Promises and async/await",
      "Week 6: Modules and Tooling",
      "Week 7: Error Handling and Debugging",
      "Week 8: Final Project"
    ]
  },
  {
    "id": 3,
    "name": "Fullstack Web Development",
    "instructor": "Michael Brown",
    "description": "A comprehensive guide to building fullstack applications using React, Node.js, and MongoDB.",
    "enrollmentStatus": "Closed",
    "duration": "12 weeks",
    "progress": 80,
    "duedate": "2021-12-22",
    "schedule": "Sat, 10 AM - 4 PM",
    "location": "Lab 5, Tech Hub",
    "prerequisites": "Basic HTML, CSS, and JavaScript knowledge",
    "syllabus": [
      "Week 1-2: HTML, CSS, and JavaScript Refresh",
      "Week 3-4: Frontend with React",
      "Week 5-6: Backend with Node.js",
      "Week 7-8: Database with MongoDB",
      "Week 9-10: REST APIs and Authentication",
      "Week 11: Deployment and Testing",
      "Week 12: Capstone Project"
    ]
  },
  {
    "id": 4,
    "name": "Data Structures and Algorithms",
    "instructor": "Sarah Wilson",
    "description": "Master common data structures and algorithms used in technical interviews.",
    "enrollmentStatus": "Open",
    "duration": "10 weeks",
    "progress": 30,
    "schedule": "Wed & Fri, 5 PM - 7 PM",
    "location": "Online",
    "prerequisites": "Basic programming knowledge",
    "syllabus": [
      "Week 1: Introduction to Algorithms",
      "Week 2: Arrays and Strings",
      "Week 3: Linked Lists",
      "Week 4: Stacks and Queues",
      "Week 5: Trees",
      "Week 6: Graphs",
      "Week 7: Sorting and Searching",
      "Week 8: Dynamic Programming",
      "Week 9: Greedy Algorithms",
      "Week 10: Final Project"
    ]
  },
  {
    "id": 5,
    "name": "Python for Data Science",
    "instructor": "Alice Johnson",
    "description": "Learn Python and its libraries for data analysis, visualization, and machine learning.",
    "enrollmentStatus": "Open",
    "duration": "8 weeks",
    "progress": 50,
    "schedule": "Mon & Thu, 6 PM - 8 PM",
    "location": "Room 101, Data Science Lab",
    "prerequisites": "Basic Python knowledge",
    "syllabus": [
      "Week 1: Python Basics",
      "Week 2: NumPy and Pandas",
      "Week 3: Data Visualization with Matplotlib",
      "Week 4: Data Cleaning",
      "Week 5: Introduction to Machine Learning",
      "Week 6: Scikit-Learn",
      "Week 7: Final Project Part 1",
      "Week 8: Final Project Part 2"
    ]
  },
  {
    "id": 6,
    "name": "Mastering GraphQL",
    "instructor": "Eve Davis",
    "description": "This is a detailed description for Course 6.",
    "enrollmentStatus": "Open",
    "duration": "4 weeks",
    "progress": 20,
    "duedate": "2021-12-18",
    "schedule": "Mon & Wed, 7 PM - 7 PM",
    "location": "Room 106, Building 2",
    "prerequisites": "Basic knowledge of Subject 6",
    "syllabus": [
      "Week 1: Topic 1 for Course 6",
      "Week 2: Topic 2 for Course 6",
      "Week 3: Topic 3 for Course 6",
      "Week 4: Topic 4 for Course 6",
      "Week 5: Topic 5 for Course 6",
      "Week 6: Topic 6 for Course 6",
      "Week 7: Topic 7 for Course 6"
    ]
  },
  {
    "id": 7,
    "name": "Introduction to DevOps",
    "instructor": "James Lee",
    "description": "This is a detailed description for Course 7.",
    "enrollmentStatus": "In Progress",
    "duration": "5 weeks",
    "progress": 75,
    "duedate": "2021-12-20",
    "schedule": "Tue & Thu, 8 PM - 8 PM",
    "location": "Room 107, Building 3",
    "prerequisites": "Basic knowledge of Subject 7",
    "syllabus": [
      "Week 1: Topic 1 for Course 7",
      "Week 2: Topic 2 for Course 7",
      "Week 3: Topic 3 for Course 7",
      "Week 4: Topic 4 for Course 7",
      "Week 5: Topic 5 for Course 7",
      "Week 6: Topic 6 for Course 7",
      "Week 7: Topic 7 for Course 7",
      "Week 8: Topic 8 for Course 7"
    ]
  },
  {
    "id": 8,
    "name": "Cybersecurity Essentials",
    "instructor": "Chris Roberts",
    "description": "This is a detailed description for Course 8.",
    "enrollmentStatus": "Open",
    "duration": "6 weeks",
    "progress": 90,
    "duedate": "2021-12-22",
    "schedule": "Fri, 5 PM - 7 PM",
    "location": "Room 108, Building 4",
    "prerequisites": "None",
    "syllabus": [
      "Week 1: Topic 1 for Course 8",
      "Week 2: Topic 2 for Course 8",
      "Week 3: Topic 3 for Course 8",
      "Week 4: Topic 4 for Course 8",
      "Week 5: Topic 5 for Course 8"
    ]
  },
  {
    "id": 9,
    "name": "Agile Project Management",
    "instructor": "Laura Johnson",
    "description": "This is a detailed description for Course 9.",
    "enrollmentStatus": "Open",
    "duration": "7 weeks",
    "progress": 10,
    "schedule": "Mon & Wed, 6 PM - 8 PM",
    "location": "Room 109, Building 5",
    "prerequisites": "Basic knowledge of Subject 9",
    "syllabus": [
      "Week 1: Topic 1 for Course 9",
      "Week 2: Topic 2 for Course 9",
      "Week 3: Topic 3 for Course 9",
      "Week 4: Topic 4 for Course 9",
      "Week 5: Topic 5 for Course 9",
      "Week 6: Topic 6 for Course 9"
    ]
  },
  {
    "id": 10,
    "name": "Kubernetes for Beginners",
    "instructor": "Alex Wong",
    "description": "This is a detailed description for Course 10.",
    "enrollmentStatus": "Open",
    "duration": "8 weeks",
    "progress": 55,
    "schedule": "Tue & Thu, 7 PM - 7 PM",
    "location": "Room 110, Building 1",
    "prerequisites": "Basic knowledge of Subject 10",
    "syllabus": [
      "Week 1: Topic 1 for Course 10",
      "Week 2: Topic 2 for Course 10",
      "Week 3: Topic 3 for Course 10",
      "Week 4: Topic 4 for Course 10",
      "Week 5: Topic 5 for Course 10",
      "Week 6: Topic 6 for Course 10",
      "Week 7: Topic 7 for Course 10"
    ]
  },
  {
    "id": 11,
    "name": "Cloud Computing with AWS",
    "instructor": "Sophia Miller",
    "description": "This is a detailed description for Course 11.",
    "enrollmentStatus": "Closed",
    "duration": "9 weeks",
    "progress": 85,
    "schedule": "Fri, 8 PM - 8 PM",
    "location": "Room 111, Building 2",
    "prerequisites": "Basic knowledge of Subject 11",
    "syllabus": [
      "Week 1: Topic 1 for Course 11",
      "Week 2: Topic 2 for Course 11",
      "Week 3: Topic 3 for Course 11",
      "Week 4: Topic 4 for Course 11",
      "Week 5: Topic 5 for Course 11",
      "Week 6: Topic 6 for Course 11",
      "Week 7: Topic 7 for Course 11",
      "Week 8: Topic 8 for Course 11"
    ]
  },
  {
    "id": 12,
    "name": "Machine Learning with Python",
    "instructor": "David Kim",
    "description": "This is a detailed description for Course 12.",
    "enrollmentStatus": "Open",
    "duration": "4 weeks",
    "progress": 40,
    "due date": "2021-12-20",
    "schedule": "Mon & Wed, 5 PM - 7 PM",
    "location": "Room 112, Building 3",
    "prerequisites": "None",
    "syllabus": [
      "Week 1: Topic 1 for Course 12",
      "Week 2: Topic 2 for Course 12",
      "Week 3: Topic 3 for Course 12",
      "Week 4: Topic 4 for Course 12",
      "Week 5: Topic 5 for Course 12"
    ]
  },
  {
    "id": 13,
    "name": "Blockchain Fundamentals",
    "instructor": "Emily Clark",
    "description": "This is a detailed description for Course 13.",
    "enrollmentStatus": "In Progress",
    "duration": "5 weeks",
    "progress": 70,
    "duedate": "2021-12-20",
    "schedule": "Tue & Thu, 6 PM - 8 PM",
    "location": "Room 113, Building 4",
    "prerequisites": "Basic knowledge of Subject 13",
    "syllabus": [
      "Week 1: Topic 1 for Course 13",
      "Week 2: Topic 2 for Course 13",
      "Week 3: Topic 3 for Course 13",
      "Week 4: Topic 4 for Course 13",
      "Week 5: Topic 5 for Course 13",
      "Week 6: Topic 6 for Course 13"
    ]
  },
  {
    "id": 14,
    "name": "Ethical Hacking and Penetration Testing",
    "instructor": "Brian Foster",
    "description": "This is a detailed description for Course 14.",
    "enrollmentStatus": "Closed",
    "duration": "6 weeks",
    "progress": 95,
    "schedule": "Fri, 7 PM - 7 PM",
    "location": "Room 114, Building 5",
    "prerequisites": "Basic knowledge of Subject 14",
    "syllabus": [
      "Week 1: Topic 1 for Course 14",
      "Week 2: Topic 2 for Course 14",
      "Week 3: Topic 3 for Course 14",
      "Week 4: Topic 4 for Course 14",
      "Week 5: Topic 5 for Course 14",
      "Week 6: Topic 6 for Course 14",
      "Week 7: Topic 7 for Course 14"
    ]
  },
  {
    "id": 15,
    "name": "Design Patterns in Software Development",
    "instructor": "Kevin Anderson",
    "description": "This is a detailed description for Course 15.",
    "enrollmentStatus": "Open",
    "duration": "7 weeks",
    "progress": 35,
    "schedule": "Mon & Wed, 8 PM - 8 PM",
    "location": "Room 115, Building 1",
    "prerequisites": "Basic knowledge of Subject 15",
    "syllabus": [
      "Week 1: Topic 1 for Course 15",
      "Week 2: Topic 2 for Course 15",
      "Week 3: Topic 3 for Course 15",
      "Week 4: Topic 4 for Course 15",
      "Week 5: Topic 5 for Course 15",
      "Week 6: Topic 6 for Course 15",
      "Week 7: Topic 7 for Course 15",
      "Week 8: Topic 8 for Course 15"
    ]
  },
  {
    "id": 16,
    "name": "Vue.js Complete Guide",
    "instructor": "Olivia Brown",
    "description": "This is a detailed description for Course 16.",
    "enrollmentStatus": "Open",
    "duration": "8 weeks",
    "progress": 60,
    "duedate": "2021-12-20",
    "schedule": "Tue & Thu, 5 PM - 7 PM",
    "location": "Room 116, Building 2",
    "prerequisites": "None",
    "syllabus": [
      "Week 1: Topic 1 for Course 16",
      "Week 2: Topic 2 for Course 16",
      "Week 3: Topic 3 for Course 16",
      "Week 4: Topic 4 for Course 16",
      "Week 5: Topic 5 for Course 16"
    ]
  },
  {
    "id": 17,
    "name": "Data Visualization with D3.js",
    "instructor": "Liam Scott",
    "description": "This is a detailed description for Course 17.",
  "enrollmentStatus": "In Progress",
    "duration": "9 weeks",
    "progress": 85,
    "duedate": "2021-12-20",
    "schedule": "Fri, 6 PM - 8 PM",
    "location": "Room 117, Building 3",
    "prerequisites": "Basic knowledge of Subject 17",
    "syllabus": [
      "Week 1: Topic 1 for Course 17",
      "Week 2: Topic 2 for Course 17",
      "Week 3: Topic 3 for Course 17",
      "Week 4: Topic 4 for Course 17",
      "Week 5: Topic 5 for Course 17",
      "Week 6: Topic 6 for Course 17"
    ]
  },
  {
    "id": 18,
    "name": "Introduction to TypeScript",
    "instructor": "Emma Harris",
    "description": "This is a detailed description for Course 18.",
    "enrollmentStatus": "Open",
    "duration": "4 weeks",
    "progress": 25,
    "schedule": "Mon & Wed, 7 PM - 7 PM",
    "location": "Room 118, Building 4",
    "prerequisites": "Basic knowledge of Subject 18",
    "syllabus": [
      "Week 1: Topic 1 for Course 18",
      "Week 2: Topic 2 for Course 18",
      "Week 3: Topic 3 for Course 18",
      "Week 4: Topic 4 for Course 18",
      "Week 5: Topic 5 for Course 18",
      "Week 6: Topic 6 for Course 18",
      "Week 7: Topic 7 for Course 18"
    ]
  },
  {
    "id": 19,
    "name": "Progressive Web Apps (PWAs)",
    "instructor": "Daniel Martinez",
    "description": "This is a detailed description for Course 19.",
    "enrollmentStatus": "In Progress",
    "duration": "5 weeks",
    "progress": 50,
    "duedate": "2021-12-20",
    "schedule": "Tue & Thu, 8 PM - 8 PM",
    "location": "Room 119, Building 5",
    "prerequisites": "Basic knowledge of Subject 19",
    "syllabus": [
      "Week 1: Topic 1 for Course 19",
      "Week 2: Topic 2 for Course 19",
      "Week 3: Topic 3 for Course 19",
      "Week 4: Topic 4 for Course 19",
      "Week 5: Topic 5 for Course 19",
      "Week 6: Topic 6 for Course 19",
      "Week 7: Topic 7 for Course 19",
      "Week 8: Topic 8 for Course 19"
    ]
  },
    {
      "id": 20,
      "name": "Introduction to Firebase",
      "instructor": "Sophia Turner",
      "description": "This is a detailed description for Course 20.",
      "enrollmentStatus": "In Progress",
      "duration": "6 weeks",
      "progress": 25,
      "duedate": "2021-12-20",
      "schedule": "Fri, 5 PM - 7 PM",
      "location": "Room 120, Building 1",
      "prerequisites": "None",
      "syllabus": [
        "Week 1: Topic 1 for Course 20",
        "Week 2: Topic 2 for Course 20",
        "Week 3: Topic 3 for Course 20",
        "Week 4: Topic 4 for Course 20",
        "Week 5: Topic 5 for Course 20"
      ]
    }
  ]
  

  const enrolledCourses = arr.filter(course => course.enrollmentStatus === 'In Progress');


  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{backgroundColor: "pink", height: "50px", padding: "5px", borderRadius: "10px" }}>Course Dashboard</h1>

      <h2 >Enrolled Courses</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', backgroundColor: "#FBFFE4" }}>
      {enrolledCourses.map((course) => (
        
        <div  key={course.id} style={{ border: '1px solid #ddd', borderRadius: '8px', margin: '10px 0', padding: '20px' }}>
          <img className='cards' src="data:image/jpeg;base64,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" alt="COURSES" style={{width: "300px"}} />
          <h2>{course.name}</h2>
          <p><strong>Instructor:</strong> {course.instructor}</p>
          <p><strong>Due Date:</strong> {course.duedate}</p>
          <p><strong>Enrollment Status:</strong> {course.enrollmentStatus}</p>
          <p><strong>Progress:</strong> {course.progress}%</p>

         
          
          <div style={{ height: '15px', background: '#f0f0f0', borderRadius: '8px', overflow: 'hidden' }}>
            <div 
              style={{ 
                width: `${course.progress}%`, 
                height: '100%', 
                background: course.progress >= 75 ? '#4caf50' : course.progress >= 50 ? '#ff9800' : '#f44336', 
                transition: 'width 0.3s ease' 
              }}
            />
          </div>

         <div className='checkbox'>
         <input type="checkbox" /> <label htmlFor="">Completed</label>
         </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Dashboard;
