import React from "react";

export default function Student({ name, surname, dob, city, program, group }) {
  return (
    <div>
      <p>
        {name} {surname}, {dob}
        <button className="edit btn btn-warning">Edit ✏</button>
        <button className="delete btn btn-danger">Delete ❌</button>
      </p>
    </div>
  );
}
