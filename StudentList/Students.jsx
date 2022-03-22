import React, { useState } from "react";
import StudentsList from "./StudentsList";
import AddStudent from "./AddStudent";
import StudentsData from "./StudentsData.json";

export default function Students() {
  const startingData = [
    { id: 1, name: "Jonas", surname: "Jonaitis", dob: "1997-08-01", city: "Vilnius", program: "JS", group: "JS-21" },
    { id: 2, name: "Petras", surname: "Petrauskas", dob: "190-11-11", city: "Ukmerge", program: "JAVA", group: "JAVA-25" },
  ];

  const [studentsList, setStudentsList] = useState(startingData);
  console.log(Array.isArray(studentsList));

  function updateStudentsList(newStudent) {
    console.log(studentsList);
    setStudentsList(...studentsList, newStudent);
  }

  return (
    <div>
      <AddStudent updateStudentsList={updateStudentsList} />
      <StudentsList data={studentsList} />
    </div>
  );
}
