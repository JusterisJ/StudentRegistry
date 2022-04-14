import React, { useState, useEffect } from "react";
import AddStudentForm from "./AddStudentForm";
import Student from "./Student";

const url = "http://localhost:3000/api/v1/students";
function StudentsList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddStudentForm, setShowAddStudentForm] = useState(false);
  const getUsers = () => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data.students);
        setUsers(result.data.students);
        console.log(users);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getUsers();
  }, []);

  //  return <div>{JSON.stringify(users)}</div>;
  return (
    <>
      {showAddStudentForm && <AddStudentForm setShowAddStudentForm={setShowAddStudentForm} getUsers={getUsers} />}
      {!showAddStudentForm && <button onClick={() => setShowAddStudentForm(true)}>Add new student</button>}

      <div>
        {!isLoading &&
          users.map((student, index) => (
            <div>
              <Student key={new Date().getTime().toString()} student={student} index={index} getUsers={getUsers} setUsers={setUsers} users={users} />
            </div>
          ))}
      </div>
    </>
  );
}
export default StudentsList;
