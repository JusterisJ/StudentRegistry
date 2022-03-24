import React from "react";
import AddStudent from "./AddStudent";

export default function Student(props) {
  let id = props.id;
  let name = props.name;
  let surname = props.surname;
  let dob = props.dob;
  let city = props.city;
  let group = props.group;
  let program = props.program;
  console.log(props);
  return (
    <div>
      <p>
        {name} {surname}, {dob}
        <button onClick={() => props.editStudent(id, name, surname, dob, city, program, group)} className="edit btn btn-warning">
          Edit ✏
        </button>
        <button onClick={() => props.deleteStudent(id)} className="delete btn btn-danger">
          Delete ❌
        </button>
      </p>
    </div>
  );
}
