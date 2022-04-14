import React, { useState } from "react";
import EditStudentForm from "./EditStudentForm";

export default function Student(props) {
  const [showForm, setShowForm] = useState(false);
  let { student } = props;

  function deleteStudent(id) {
    console.log("deleting student with id " + id);
    fetch(`http://localhost:3000/api/v1/students/${id}`, { method: "DELETE" }).then(() => {
      console.log(props.users);
      let newUsers = [...props.users];
      newUsers.splice(props.index, 1);
      props.setUsers(newUsers);
    });
  }
  return (
    <div>
      <div>
        <p>
          <button onClick={() => setShowForm(true)} className="edit btn btn-warning">
            Edit ✏
          </button>
          <button
            className="delete btn btn-danger"
            onClick={() => {
              deleteStudent(student._id);
            }}
          >
            Delete ❌
          </button>
          {student.name} {student.surname} {student.dob} {student.town} {student.city} {student.program} {student.group}
        </p>
      </div>
      {showForm && <EditStudentForm id={student._id} student={student} getUsers={props.getUsers} />}
    </div>
  );
}
