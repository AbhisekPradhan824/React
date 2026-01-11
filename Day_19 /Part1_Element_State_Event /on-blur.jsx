import { useState } from "react";

export function OnBlurDemo() {
  const [codeError, setCodeError] = useState("");
  function VerifyCode(e) {
    if (e.target.value === "") {
      setCodeError("IFSC Code is Required.");
    } else {
      e.target.value = e.target.value.toUpperCase();
      setCodeError("");
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
      </dl>
    </div>
  );
}
