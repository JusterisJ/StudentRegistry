import React, { useState } from "react";
import Students from "./Students";
import StudentsData from "./StudentsData.json";
import StudentsList from "./StudentsList";

export default function AddStudent(props) {
  const [studentName, setStudentName] = useState("");
  const [studentSurName, setStudentSurName] = useState("");
  const [studentDob, setStudentDob] = useState("");
  const [studentCity, setStudentCity] = useState("");
  const [studentProgram, setStudentProgram] = useState("");
  const [studentGroup, setStudentGroup] = useState("");
  const [showForm, setShowform] = useState("d-inline");

  function handleAddStudent() {}
  function showAddStudentForm() {
    setShowform("d-none");
    document.querySelector(`.addStudentForm`).classList.remove(showForm);
  }
  function addNewStudent() {
    let newStudent = { name: studentName, surname: studentSurName, dob: studentDob, city: studentCity, program: studentProgram, group: studentGroup };
    console.log(newStudent);
    props.updateStudentsList(newStudent);
  }

  return (
    <div>
      <div>
        <form
          onChange={(e) => {}}
          onSubmit={(e) => {
            addNewStudent();
            e.preventDefault();
          }}
        >
          <div className="addStudentForm d-inline">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input onChange={(e) => setStudentName(e.target.value)} type="text" name="name" id="name" className="form-control w-25" />
            </div>
            <div className="form-group">
              <label htmlFor="surname">Surname:</label>
              <input onChange={(e) => setStudentSurName(e.target.value)} type="text" name="surname" id="surname" className="form-control w-25" />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth:</label>
              <input onChange={(e) => setStudentDob(e.target.value)} type="text" name="dob" id="dob" className="form-control w-25" />
            </div>
            <div className="form-group">
              <label htmlFor="city">City:</label>
              <input onChange={(e) => setStudentCity(e.target.value)} type="text" name="city" id="city" className="form-control w-25" />
            </div>
            <div className="form-group">
              <label htmlFor="program">Program:</label>
              <input onChange={(e) => setStudentProgram(e.target.value)} type="text" name="program" id="program" className="form-control w-25" />
            </div>
            <div className="form-group">
              <label htmlFor="group">Group:</label>
              <input onChange={(e) => setStudentGroup(e.target.value)} type="text" name="group" id="group" className="form-control w-25" />
            </div>
          </div>

          <button
            type="submit"
            className="add btn btn-success"
            onClick={() => {
              showAddStudentForm();
            }}
          >
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
}
