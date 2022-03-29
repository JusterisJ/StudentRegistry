import React from "react";

export default function EditStudentForm(props) {
  let student = { id: props.id, name: props.name, surname: props.surname, dob: props.dob, city: props.city, program: props.program, group: props.group };

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
          <div className="form-group">
            <label htmlFor="surname">Surname:</label>
            <input type="text" name="surname" id="surname" defaultValue={props.surname} className="form-control w-25" />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input type="text" name="dob" id="dob" defaultValue={props.dob} className="form-control w-25" />
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input type="text" name="city" id="city" defaultValue={props.city} className="form-control w-25" />
          </div>
          <div className="form-group">
            <label htmlFor="program">Program:</label>
            <input type="text" name="program" id="program" defaultValue={props.program} className="form-control w-25" />
          </div>
          <div className="form-group">
            <label htmlFor="group">Group:</label>
            <input type="text" name="group" id="group" defaultValue={props.group} className="form-control w-25" />
          </div>

          <button type="submit" className="add btn btn-success">
            Edit
          </button>
        </form>
      </div>
    </div>
  );
}
