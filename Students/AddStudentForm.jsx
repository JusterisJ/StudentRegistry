import React, { useState } from "react";

export default function AddStudentForm(props) {
  const url = "http://localhost:3000/api/v1/students";
  const [student, setStudent] = useState({});

  function addStudent(newStudent) {
    fetch(`http://localhost:3000/api/v1/students`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    }).then((res) => {
      console.log("Request complete! response:", res, newStudent, JSON.stringify(newStudent));
      props.getUsers();
      setStudent({});
    });
  }

  function updateStudentObject(e) {
    student[e.target.name] = e.target.value;
  }

  return (
    <div>
      <div>
        <form
          onSubmit={(e) => {
            console.log(student);
            e.preventDefault();
            addStudent(student);
            props.setShowAddStudentForm(false);
          }}
          onChange={(e) => {
            e.preventDefault();
            updateStudentObject(e);
          }}
        >
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input required type="text" name="name" id="name" className="form-control w-25" />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Surname:</label>
            <input type="text" name="surname" id="surname" className="form-control w-25" />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" name="dob" id="dob" className="form-control w-25" />
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input type="text" name="city" id="city" className="form-control w-25" />
          </div>
          <div className="form-group">
            <label htmlFor="program">Program:</label>
            <input type="text" name="program" id="program" className="form-control w-25" />
          </div>
          <div className="form-group">
            <label htmlFor="group">Group:</label>
            <input type="text" name="group" id="group" className="form-control w-25" />
          </div>

          <button type="submit" className="add btn btn-success">
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
}
