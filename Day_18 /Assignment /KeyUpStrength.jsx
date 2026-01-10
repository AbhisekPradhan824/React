import { useState } from "react";

export function KeyUpStrength() {
  const [users] = useState([
    { UserID: "John" },
    { UserID: "John123" },
    { UserID: "John_121" },
    { UserID: "john_34" },
  ]);

  const [userError, setUserError] = useState("");
  const [isUserValid, setIsUserValid] = useState(false);
  const [passError, setPassError] = useState("");
  const [matchPassword] = useState(/^(?=.*[A-Z])[a-zA-Z0-9]{4,16}$/);
  const [passClass, setPassClass] = useState("");

  // Set consistent low/high boundaries
  const [meterParams, setMeterParams] = useState({
    low: 30,
    high: 70,
    value: 0,
  });

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

  function VerifyPassword(e) {
    if (e.target.value.match(matchPassword)) {
      setPassError("Strong Password");
      setPassClass("text-success");
      // Value 100 is above High (70) -> Green
      setMeterParams({ low: 30, high: 70, value: 100 });
    } else {
      if (e.target.value.length < 4) {
        setPassError("Poor Password");
        setPassClass("text-danger");
        // Value 25 is below Low (30) -> Red
        setMeterParams({ low: 40, high: 70, value: 30 });
      } else {
        setPassError("Weak Password");
        setPassClass("text-warning");
        // Value 50 is between Low (30) and High (70) -> Yellow
        setMeterParams({ low: 30, high: 70, value: 50 });
      }
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
          <input type="password" onKeyUp={VerifyPassword} />
        </dd>
        <dd>
          <meter
            value={meterParams.value}
            min="0"
            max="100"
            low={meterParams.low}
            high={meterParams.high}
            optimum="100"
          ></meter>
          <p className={passClass}>{passError}</p>
        </dd>
      </dl>
    </div>
  );
}
