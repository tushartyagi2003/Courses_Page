import React from 'react'
import { Link } from "react-router-dom";

const DashboardwithNavbar = () => {

  const arr = [
    {
      "id": 1,
      "name": "Introduction to React",
      "instructor": "John Doe",
      "description": "Learn the basics of React, including components, state, and props.",
      "enrollmentStatus": "Open",
      "duration": "6 weeks",
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
      "enrollmentStatus": "Closed",
      "duration": "6 weeks",
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
      "enrollmentStatus": "In Progress",
      "duration": "8 weeks",
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
      "enrollmentStatus": "In Progress",
      "duration": "8 weeks",
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
      "enrollmentStatus": "Closed",
      "duration": "9 weeks",
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
      "enrollmentStatus": "Closed",
      "duration": "6 weeks",
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


  return (
   <>

   <div>
    <ul>
      {arr.map((data) =>(
        <div key={data.id}>
          <li  ><Link to={`/${data.id}`}>{data.name}</Link></li>
          <li  ><Link to={`/${data.id}`}>{data.instructor}</Link></li>
          <li  ><Link to={`/${data.id}`}>{data.description}</Link></li>
        </div>
      ))}
    </ul>
   </div>
   </>
  )
}

export default DashboardwithNavbar