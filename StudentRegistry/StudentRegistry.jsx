import React, { useState } from "react";
import AddStudentForm from "./AddStudentForm";
import StudentList from "./StudentList";

export default function StudentRegistry() {
  const startingData = [
    { id: 1, name: "Jonas", surname: "Jonaitis", dob: "1997-08-01", city: "Vilnius", program: "JS", group: "JS-21" },
    { id: 2, name: "Petras", surname: "Petrauskas", dob: "190-11-11", city: "Ukmerge", program: "JAVA", group: "JAVA-25" },
  ];
  const [studentData, setStudentData] = useState(startingData);
  const [showAddStudentForm, setShowAddStudentForm] = useState(false);
  const [searchBy, setSearchBy] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  function deleteStudent(id) {
    setStudentData(studentData.filter((data) => data.id !== id));
  }
  console.log(searchBy, searchTerm);

  function addStudent(object) {
    // object.id ? true : (object.id = new Date().getTime().toString());
    if (!object.id) {
      console.log(`ojbect no id`);
      object.id = new Date().getTime().toString();
    }
    console.log(object);
    let newStudentData = [...studentData, object];
    setStudentData(newStudentData);
    console.log(studentData);
  }
  function editStudent(editableStudent) {
    console.log(`aa`, editableStudent.id);
    let newStudentData = [...studentData];
    let indexOf = 0;
    newStudentData.forEach((data, index) => {
      if (data.id == editableStudent.id) {
        indexOf = index;
        newStudentData[indexOf] = editableStudent;
      }
    });
    setStudentData(newStudentData);
    console.log(studentData, newStudentData);
  }

  return (
    <div>
      {showAddStudentForm ? <AddStudentForm addStudent={addStudent} setShowAddStudentForm={setShowAddStudentForm} /> : false}
      <button onClick={() => setShowAddStudentForm(true)}>New Student</button>
      <div>
        Search by:{" "}
        <form>
          <select onChange={(e) => setSearchBy(e.target.value)} name="search" id="search">
            <option value="">--Select--</option>
            <option value="name">Name</option>
            <option value="surname">Surname</option>
            <option value="dob">Date of Birth</option>
            <option value="city">City</option>
            <option value="program">Program</option>
            <option value="group">Group</option>
          </select>
          <input onChange={(e) => setSearchTerm(e.target.value)} type="text" />
        </form>
      </div>
      <button onClick={() => console.log(studentData.filter((data) => data[searchBy] == data[searchTerm]))}>test</button>
      {searchBy ? (
        <StudentList editStudent={editStudent} deleteStudent={deleteStudent} data={studentData.filter((data) => data[searchBy].includes(searchTerm))} />
      ) : (
        <StudentList editStudent={editStudent} deleteStudent={deleteStudent} data={studentData} />
      )}
    </div>
  );
}
