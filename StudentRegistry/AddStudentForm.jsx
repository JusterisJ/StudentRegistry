import React, { useState } from "react";

export default function AddStudentForm({ addStudent, setShowAddStudentForm }) {
  const [student, setStudent] = useState({});

  function updateStudent(e) {
    console.log(e);
    student[e.target.name] = e.target.value;
    console.log(e.target);
    console.log(student);
  }
  function clearFormInputs(e) {
    for (let i = 0; i < e.target.length; i++) {
      e.target[1].value = "";
    }
  }
  return (
    <div>
      <div>
        <form
          onChange={(e) => updateStudent(e)}
          onSubmit={(e) => {
            e.preventDefault();
            addStudent(student);
            setStudent({});
            console.log(student);
            clearFormInputs(e);
            setShowAddStudentForm(false);
          }}
        >
          <div className="form-group">
            <label htmlFor="id">id:</label>
            <input type="text" name="id" id="name" className="form-control w-25" />
          </div>
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
            <input type="text" name="dob" id="dob" className="form-control w-25" />
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
