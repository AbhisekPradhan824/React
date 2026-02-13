import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [userName, setUserName] = useState();
  const navigate = useNavigate();

  function handleUserNameChange(e) {
    setUserName(e.target.value);
  }
  function handleLoginClick() {
    if (userName === "admin") {
      navigate(`/success/${userName}`);
    } else {
      navigate("/invalid");
    }
  }
  return (
    <div>
      <h3>Login</h3>
      User Name: <input type="text" onChange={handleUserNameChange} />{" "}
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
}
