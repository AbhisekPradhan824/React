import { useState } from "react";

export function KeyUp() {
  const [users] = useState([
    { UserID: "John" },
    { UserID: "John123" },
    { UserID: "John_121" },
    { UserID: "john_34" },
  ]);
  const [userError, setUserError] = useState("");
  const [errClass, setErrClass] = useState("");
  function handleKeyUp(e) {
    for (var user of users) {
      if (e.target.value === user.UserID) {
        setUserError("User Is taken please try another");
        setErrClass("text-danger");
        break;
      } else {
        setUserError("User Is Avliable");
        setErrClass("text-success");
      }
    }
  }
  return (
    <div className="container-fluid">
      <dl>
        <dt>Enter User ID</dt>
        <dd>
          <input type="text" onKeyUp={handleKeyUp} />
        </dd>
        <dd>
          <p className={errClass}>{userError}</p>
        </dd>
      </dl>
    </div>
  );
}
