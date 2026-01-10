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
  const [isUserValid, setIsUserValid] = useState(false);
  const [capsWarning, setCapsWarning] = useState({ display: "none" });

  function VerifyUserId(e) {
    for (var user of users) {
      if (user.UserID === e.target.value) {
        setUserError("User is taken- Please try Another");
        setIsUserValid(false);
        break;
      } else {
        setUserError("User is Avliable");
        setIsUserValid(true);
      }
    }
  }

  function VerifyCaps(e) {
    if (e.which >= 65 && e.which <= 90) {
      setCapsWarning({ display: "block" });
    } else {
      setCapsWarning({ display: "none" });
    }
  }

  return (
    <div className="container-fluid">
      <h2>Register User</h2>
      <dl>
        <dt>UserId</dt>
        <dd>
          <input type="text" onKeyUp={VerifyUserId} />
          <dd className={isUserValid ? "text-success" : "text-danger"}>
            {userError}
          </dd>
        </dd>
        <dt>Password</dt>
        <dd>
          <input type="password" onKeyPress={VerifyCaps} />
        </dd>
        <dd className="text-warning" style={capsWarning}>
          <div className="bi bi-exclamation-triangle"> Warning - CAPS ON</div>
        </dd>
      </dl>
    </div>
  );
}
