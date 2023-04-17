import React from "react";
import { Link } from "react-router-dom";

function Input() {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [employeeStatus, setEmployeeStatus] = React.useState("");
  const [address, setAddress] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      age,
      department,
      employeeStatus,
      address,
    };
    fetch("http://localhost:5000/postapi", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div className="heading">
        <h1 className="text-2xl p-6 text-center font-bold text-gray-700">
          Fill the Form{" "}
          <Link to={"./detail"}>
            <button className="bg-blue-500 ml-14 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Details
            </button>
          </Link>
        </h1>
      </div>
      <div className="container  justify-center w-full mx-auto ">
        <form onSubmit={handleSubmit} className="w-4/5 mx-auto p-6 ">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Enter Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Age{" "}
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-last-name"
                type="number"
                placeholder="Enter Age"
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Department
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Enter Department"
                onChange={(e) => {
                  setDepartment(e.target.value);
                }}
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Empolyee Status{" "}
              </label>
              <select
                id="countries"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                onChange={(e) => {
                  setEmployeeStatus(e.target.value);
                }}
              >
                <option selected>Choose a Employee Status </option>
                <option value="Remote Location">Remote Location</option>
                <option value="Contract Employee">Contract Employee</option>
                <option value="Full-Time">Full-Time</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Address{" "}
              </label>
              <textarea
                id="message"
                rows="4"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="Write your thoughts here..."
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              ></textarea>
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Input;
