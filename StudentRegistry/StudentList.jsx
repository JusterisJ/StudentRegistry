import React from "react";
import Student from "./Student";

export default function StudentList(props) {
  let newData = props.data.map((data) => {
    return <Student editStudent={props.editStudent} deleteStudent={props.deleteStudent} key={data.id} id={data.id} name={data.name} surname={data.surname} dob={data.dob} city={data.city} program={data.program} group={data.group} />;
  });
  return <>{newData}</>;
}
