import React from "react";

export default function EditStudentForm(props) {
  let student = { id: props.id, name: props.name };

  function updateStudent(e) {
    student[e.target.name] = e.target.value;
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
            props.editStudent(student);
            clearFormInputs(e);
            props.setShowEditForm(false);
          }}
        >
          <div className="form-group">
            <label htmlFor="id">id:</label>
            <input type="text" name="id" id="name" defaultValue={props.id} className="form-control w-25" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input required type="text" name="name" id="name" defaultValue={props.name} className="form-control w-25" />
          </div>

          <button type="submit" className="add btn btn-success">
            Edit
          </button>
        </form>
      </div>
    </div>
  );
}
