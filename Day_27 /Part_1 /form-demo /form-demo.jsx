import { useState } from "react";

export function FormDemo() {
  const [details, setDetails] = useState({
    UserName: "",
    Password: "",
    Mobile: "",
    Gneder: "",
    City: "",
  });
  const [userError, setUserError] = useState("");

  function handleCityChange(e) {
    setDetails({
      UserName: details.UserName,
      Password: details.Password,
      Mobile: details.Mobile,
      Gender: details.Gneder,
      City: e.target.value,
    });
  }
  function handleGenderChange(e) {
    setDetails({
      UserName: details.UserName,
      Password: details.Password,
      Mobile: details.Mobile,
      Gender: e.target.value,
      City: details.City,
    });
  }
  function handleNameChange(e) {
    setDetails({
      UserName: e.target.value,
      Password: details.Password,
      Mobile: details.Mobile,
      Gender: details.Gneder,
      City: details.City,
    });
  }
  function handlePasswordChange(e) {
    setDetails({
      UserName: details.UserName,
      Password: e.target.value,
      Mobile: details.Mobile,
      Gender: details.Gneder,
      City: details.City,
    });
  }
  function handleMobileChange(e) {
    setDetails({
      UserName: details.UserName,
      Password: details.Password,
      Mobile: e.target.value,
      Gender: details.Gneder,
      City: details.City,
    });
  }
  function verifyUser(e) {
    if (e.target.value === "") {
      setUserError("Name is required..");
    } else {
      setUserError("");
    }
  }
  function handleRegisterClick(e) {
    e.preventDefault();
    if (details.UserName === "") {
      setUserError("Name is required..");
    } else {
      setUserError("");
      alert(JSON.stringify(details));
    }
  }
  return (
    <div className="container-fluid">
      <h2>Register User</h2>
      <form className="w-25">
        <dl>
          <dt>UserName</dt>
          <dd>
            <input
              type="text"
              className="form-control"
              onChange={handleNameChange}
              onKeyUp={verifyUser}
              onBlur={verifyUser}
            />
          </dd>
          <dd className="text-danger">{userError}</dd>
          <dt>Password</dt>
          <dd>
            <input
              type="password"
              className="form-control"
              onChange={handlePasswordChange}
            />
          </dd>
          <dt>Mobile</dt>
          <dd>
            <input
              type="text"
              className="form-control"
              onChange={handleMobileChange}
            />
          </dd>
          <dt>Gender</dt>
          <dd>
            <input
              type="radio"
              name="Gender"
              value="Male"
              onChange={handleGenderChange}
            />
            <label>Male</label>
            <input
              type="radio"
              name="Gneder"
              value="Female"
              onChange={handleGenderChange}
            />
            <label>Female</label>
          </dd>
          <dt>City</dt>
          <dd>
            <select className="form-select" onChange={handleCityChange}>
              <option value="-1">Select City</option>
              <option value="Delhi">Del</option>
              <option value="Hyderabaad">Hyd</option>
            </select>
          </dd>
        </dl>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleRegisterClick}
        >
          Register
        </button>
      </form>
    </div>
  );
}
