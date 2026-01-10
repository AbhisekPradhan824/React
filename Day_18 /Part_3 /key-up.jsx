import { useState } from "react";
import "./key-up.css";

export function KeyUp() {
  const [users] = useState([
    { UserID: "John" },
    { UserID: "John123" },
    { UserID: "John_121" },
    { UserID: "john_34" },
  ]);

  const [userError, setUserError] = useState("");
  const [errClass, setErrClass] = useState("");
  const [boxClass, setBoxClass] = useState("form-control");

  function handleKeyUp(e) {
    const value = e.target.value;

    if (value === "") {
      setUserError("");
      setBoxClass("form-control");
      setErrClass("");
      return;
    }

    const isTaken = users.some((user) => user.UserID === value);

    if (isTaken) {
      setUserError("User Is taken please try another");
      setErrClass("text-danger");
      // Use a custom class 'is-invalid-shadow'
      setBoxClass("form-control is-invalid-shadow border-danger");
    } else {
      setUserError("User Is Available");
      setErrClass("text-success");
      // Use a custom class 'is-valid-shadow'
      setBoxClass("form-control is-valid-shadow border-success");
    }
  }

  return (
    <div className="container mt-5">
      <div className="col-md-4">
        <label className="form-label fw-bold">Enter User ID</label>
        <input
          type="text"
          className={boxClass}
          onKeyUp={handleKeyUp}
          placeholder="Check availability..."
        />
        <div className={`mt-2 ${errClass}`}>{userError}</div>
      </div>
    </div>
  );
}

