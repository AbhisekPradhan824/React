import { useState } from "react";

export function OnChangeDemo() {
  const [codeError, setCodeError] = useState("");
  const [cityError, setCityError] = useState("");
  function VerifyCode(e) {
    if (e.target.value === "") {
      setCodeError("IFSC Code is Required.");
    } else {
      e.target.value = e.target.value.toUpperCase();
      setCodeError("");
    }
  }
  function CityChange(e) {
    if (e.target.value === "-1") {
      setCityError("City is required");
    } else {
      setCityError("");
    }
  }
  return (
    <div className="container-fluid">
      <h2>Register</h2>
      <dl className="w-25">
        <dt>Enter IFSC Code</dt>
        <dd>
          <input type="text" onBlur={VerifyCode} className="form-control" />
        </dd>
        <dd className="text-danger">{codeError}</dd>
        <dt>Select City</dt>
        <dd>
          <select onChange={CityChange} className="form-select">
            <option value="-1">Select City</option>
            <option value="Hyderabaad">Hyd</option>
            <option value="Delhi">Delhi</option>
          </select>
        </dd>
        <dd className="text-danger">{cityError}</dd>
      </dl>
    </div>
  );
}
