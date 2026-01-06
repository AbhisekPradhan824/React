import { useState } from "react";

export function DataBinding() {
  const [userName, setUserName] = useState("John");

  function handleNameChange(event) {
    setUserName(event.target.value);
  }

  return (
    <>
      <h2>Edit</h2>
      UserName:{" "}
      <input type="text" value={userName} onChange={handleNameChange} />
      <p>Hello! {userName}</p>
    </>
  );
}
