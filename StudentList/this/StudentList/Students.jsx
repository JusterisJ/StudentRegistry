import React, { useState } from "react";
import StudentsList from "./StudentsList";
import AddStudent from "./AddStudent";
import StudentsData from "./StudentsData.json";
import Test from "./Test";
import ReactDOM from "react-dom";

export default function Students() {
  let form = document.querySelector(`form`);
  const startingData = [
    { id: 1, name: "Jonas", surname: "Jonaitis", dob: "1997-08-01", city: "Vilnius", program: "JS", group: "JS-21" },
    { id: 2, name: "Petras", surname: "Petrauskas", dob: "190-11-11", city: "Ukmerge", program: "JAVA", group: "JAVA-25" },
  ];

  const [studentsList, setStudentsList] = useState(startingData);

  function updateStudentsList(newStudent) {
    console.log(document.querySelector(`form`)[0].value);
    console.log(document.querySelector(`form`)[0].value, newStudent.id);
    if (document.querySelector(`form`)[1].value == newStudent.name && document.querySelector(`form`)[2].value == newStudent.surname) {
      console.log(`student in list`);
      let tempStudents2 = [...studentsList];
      tempStudents2.forEach((data) => {
        if (data.name == newStudent.name && data.surname == newStudent.surname) {
          data.name = newStudent.name;
          data.surname = newStudent.surname;
          data.dob = newStudent.dob;
          data.city = newStudent.city;
          data.program = newStudent.program;
          data.group = newStudent.group;
        }
      });
      setStudentsList(tempStudents2);
    } else {
      let tempStudents = [...studentsList];
      tempStudents.push(newStudent);
      setStudentsList(tempStudents);
    }
  }
  function deleteStudent(id) {
    setStudentsList(studentsList.filter((data) => data.id != id));
  }
  function editStudent(studentId, studentName, studentSurname, studentDob, studentCity, studentProgram, studentGroup) {
    let form = document.querySelector(`form`);
    form[0].value = studentId;
    form[1].value = studentName;
  }

  return (
    <div>
      <AddStudent updateStudentsList={updateStudentsList} />
      <StudentsList data={studentsList} deleteStudent={deleteStudent} editStudent={editStudent} />
    </div>
  );
}
