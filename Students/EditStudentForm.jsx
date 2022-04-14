import React, { useState } from "react";

export default function EditStudentForm(props) {
  const [student, setStudent] = useState({});

  function updateStudentObject(e) {
    student[e.target.name] = e.target.value;
  }

  function updateStudent(student) {
    fetch(`http://localhost:3000/api/v1/students/${student._id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    }).then((res) => {
      console.log("Request complete! response:", res, student, JSON.stringify(student));
      props.getUsers();
      setStudent({});
    });
  }
  return (
    <div>
      <div>
        <form
          onSubmit={(e) => {
            console.log(`HERE`, student);
            console.log(props.student._id);
            e.preventDefault();
            student._id = props.student._id;
            updateStudent(student);
          }}
          onChange={(e) => updateStudentObject(e)}
        >
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input required type="text" name="name" id="name" defaultValue={props.student.name} className="form-control w-25" />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Surname:</label>
            <input type="text" name="surname" id="surname" defaultValue={props.student.surname} className="form-control w-25" />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" name="dob" id="dob" defaultValue={props.student.dob} className="form-control w-25" />
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input type="text" name="city" id="city" defaultValue={props.student.city} className="form-control w-25" />
          </div>
          <div className="form-group">
            <label htmlFor="program">Program:</label>
            <input type="text" name="program" id="program" defaultValue={props.student.program} className="form-control w-25" />
          </div>
          <div className="form-group">
            <label htmlFor="group">Group:</label>
            <input type="text" name="group" id="group" defaultValue={props.student.group} className="form-control w-25" />
          </div>

          <button type="submit" className="add btn btn-success">
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
}
