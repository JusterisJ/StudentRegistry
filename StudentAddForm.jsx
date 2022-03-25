import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function StudentAddForm() {
  const [studentList, setStudentList] = useState([]);
  const form = document.querySelector(`form`);
  console.log(form);
  // console.log(form.elements.item(0).value);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let tempStudentList = [...studentList];
    tempStudentList.push(data);
    setStudentList(tempStudentList);
    console.log(`Student list:`, studentList);
    console.log(data);
    console.log(form);
    for (let i = 0; i < 7; i++) {
      form.elements[i].value = "";
    }
  };

  // watch input value by passing the name of it
  let test = watch("firstName");
  console.log(watch(test));
  console.log(watch("program"));

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="col-8 offset-2">
      <h2> Add New Student</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            Firstname
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            {...register("firstName", {
              required: "First name is required",
              minLength: 2,
              maxLength: 40,
              pattern: /^[A-Za-z]+$/i,
            })}
            defaultValue="Jonas"
          />
          {errors.firstName && (
            <span className="text-danger fw-light">This field is required</span>
          )}
          {errors.firstName?.type === "minLength" && (
            <span className="text-danger fw-light">error2</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">
            Lastname
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            {...register("lastname", {
              required: true,
              minLength: 2,
              maxLength: 40,
              pattern: /^[A-Za-z]+$/i,
            })}
            defaultValue="Jonaitis"
          />
          {errors.lastname && (
            <span className="text-danger fw-light">This field is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            className="form-control"
            id="dob"
            {...register("dob", { required: true })}
            defaultValue=""
          />
          {errors.dob && (
            <span className="text-danger fw-light">This field is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            {...register("city", { required: true, pattern: /^[A-Za-z]+$/i })}
            defaultValue="Vilnius"
          />
          {errors.city && (
            <span className="text-danger fw-light">This field is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="program" className="form-label">
            Program
          </label>
          <select
            className="form-control"
            name="program"
            {...register("program", { required: true })}
          >
            <option value="1">JavaScript Programuotojas</option>
            <option value="2">Java</option>
            <option value="3">PHP</option>
            <option value="4">Programines irangos testuotojas</option>
          </select>
          {errors.group && (
            <span className="text-danger fw-light">This field is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="group" className="form-label">
            Group
          </label>
          <select className="form-control" name="group">
            {/* {form.elements[4].selectedIndex == 1 ? (
              <option value="3">PHP</option>
            ) : (
              false
            )} */}
            {test == 1 ? <option value="1">JS21-2</option> : false}
            <option value="2">PHP21-1</option>
            <option value="3">PT21-1</option>
            <option value="4">JP21-2</option>
          </select>
          {errors.group && (
            <span className="text-danger fw-light">This field is required</span>
          )}
        </div>

        <button type="submit" className="btn btn-success">
          Add Student
        </button>
      </form>
    </div>
  );
}
