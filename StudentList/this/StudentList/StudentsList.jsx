import React from "react";
import Student from "./Student";

export default function StudentsList(props) {
  const newData = props.data.map((data) => {
    return (
      <Student
        id={data.id}
        name={data.name}
        surname={data.surname}
        dob={data.dob}
        city={data.city}
        program={data.program}
        group={data.group}
        key={data.id}
        updateStudentsList={props.updateStudentsList}
        deleteStudent={props.deleteStudent}
        editStudent={props.editStudent}
      />
    );
  });
  return <>{newData}</>;
}
