import React, { useState } from "react";
import EditStudentForm from "./EditStudentForm";

export default function Student({ editStudent, deleteStudent, id, name, surname, dob, city, program, group }) {
  const [showEditForm, setShowEditForm] = useState(false);
  return (
    <div>
      <p>
        {name} {surname}, {dob}
        <button onClick={() => setShowEditForm(true)} className="edit btn btn-warning">
          Edit ✏
        </button>
        <button onClick={() => deleteStudent(id)} className="delete btn btn-danger">
          Delete ❌
        </button>
        {showEditForm ? <EditStudentForm setShowEditForm={setShowEditForm} editStudent={editStudent} id={id} name={name} /> : false}
      </p>
    </div>
  );
}
