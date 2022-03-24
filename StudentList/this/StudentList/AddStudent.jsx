import React, { useState } from "react";
import Students from "./Students";
import StudentsData from "./StudentsData.json";
import StudentsList from "./StudentsList";
import Student from "./Student";

export default function AddStudent(props) {
  console.log(props);
  const [studentName, setStudentName] = useState("");
  const [studentSurName, setStudentSurName] = useState("");
  const [studentDob, setStudentDob] = useState("");
  const [studentCity, setStudentCity] = useState("");
  const [studentProgram, setStudentProgram] = useState("");
  const [studentGroup, setStudentGroup] = useState("");
  const [showForm, setShowform] = useState("d-inline");

  const [student2, setStudent2] = useState({});

  function handleAddStudent() {}
  function showAddStudentForm() {
    setShowform("d-none");
    document.querySelector(`.addStudentForm`).classList.remove(showForm);
  }

  function editStudent() {}

  <Student editStudent={setStudent2} />;

  function addNewStudent() {
    let newStudent = { id: new Date().getTime().toString(), name: studentName, surname: studentSurName, dob: studentDob, city: studentCity, program: studentProgram, group: studentGroup };
    console.log(newStudent);
    props.updateStudentsList(newStudent);
  }

  return (
    <div>
      <div>
        <form
          onChange={(e) => {}}
          onSubmit={(e) => {
            e.preventDefault();
            addNewStudent();
          }}
        >
          <div className="addStudentForm d-inline">
            <div className="form-group">
              <label htmlFor="id">id:</label>
              <input onChange={(e) => setStudentName(e.target.value)} type="text" name="name" id="name" className="form-control w-25" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input value={props.name} onChange={(e) => setStudentName(e.target.value)} type="text" name="name" id="name" className="form-control w-25" />
            </div>
            <div className="form-group">
              <label htmlFor="surname">Surname:</label>
              <input value={props.surname} onChange={(e) => setStudentSurName(e.target.value)} type="text" name="surname" id="surname" className="form-control w-25" />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth:</label>
              <input value={props.dob} onChange={(e) => setStudentDob(e.target.value)} type="text" name="dob" id="dob" className="form-control w-25" />
            </div>
            <div className="form-group">
              <label htmlFor="city">City:</label>
              <input value={props.city} onChange={(e) => setStudentCity(e.target.value)} type="text" name="city" id="city" className="form-control w-25" />
            </div>
            <div className="form-group">
              <label htmlFor="program">Program:</label>
              <input value={props.program} onChange={(e) => setStudentProgram(e.target.value)} type="text" name="program" id="program" className="form-control w-25" />
            </div>
            <div className="form-group">
              <label htmlFor="group">Group:</label>
              <input value={props.group} onChange={(e) => setStudentGroup(e.target.value)} type="text" name="group" id="group" className="form-control w-25" />
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
