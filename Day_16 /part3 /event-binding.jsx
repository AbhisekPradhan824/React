import { useEffect, useState } from "react";

export function EventBinding() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName("John");
  }, []);

  return (
    <div className="container-fluid">
      <h2>Register</h2>
      <p>{userName}</p>
    </div>
  );
}
