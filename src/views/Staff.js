import { useEffect, useState } from "react";
import "./css/staff.css";

const Staff = () => {
  const [staff, setStaff] = useState([]);
  const [name, setName] = useState();
  const [role, setRole] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [deployDate, setDeployDate] = useState();

  const addStaff = (event) => {
    event.preventDefault();
    setStaff([
      ...staff,
      {
        id: staff.length,
        name: name,
        role: role,
        age: age,
        gender: gender,
        deployDate: deployDate
      }
    ]);
    setName("");
    setRole("");
    setAge(parseInt());
    setGender("");
    setDeployDate("");
};

  return (
    <div className="App">
      <h1>Staff</h1>
      <div className="staff-input-management container">
        <form onSubmit={addStaff}>
          <label>
            <input
              className=""
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Staff Name"/><br />

            <input
              className=""
              name="role"
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Enter Role"/><br />

            <input
              className=""
              name="age"
              type="date"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Year of Birth"/><br />

            <input
              className=""
              name="gender"
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              placeholder="Enter Gender"/><br />

            <input
              className=""
              name="deployDate"
              type="date"
              value={deployDate}
              onChange={(e) => setDeployDate(e.target.value)}
              placeholder="Date of deployment"/><br />
            
            <button className="" onClick={addStaff}>Add New Staff</button>
          </label>
        </form>
        <ul className="staff-list">
          {staff.map((staff) => (
            <li className="staff-list-item" key={staff.id}>
              Staff: {staff.name}&nbsp;<br/>
              Role: {staff.role}&nbsp;<br/>
              Age: {staff.age}&nbsp;<br/>
              Gender: {staff.gender}&nbsp;<br/>
              Deployment Date: {staff.deployDate}&nbsp;&nbsp;&nbsp;&nbsp;
            </li>
          ))}
        </ul>
      </div>
  </div>
  );
}
  
  export default Staff;