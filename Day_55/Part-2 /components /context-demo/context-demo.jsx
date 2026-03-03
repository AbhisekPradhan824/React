import { createContext, useContext, useState } from "react";

let UserDetailsContext = createContext(null);
export function FirstLevelComponent() {
  const user = useContext(UserDetailsContext);
  return (
    <div className="bg-warning p-4 text-dark">
      <h4>First Level Component - {user}</h4>
      <SecondLevelComponent />
    </div>
  );
}

export function SecondLevelComponent() {
  let user = useContext(UserDetailsContext);
  return (
    <div className="bg-danger p-4 text-white">
      <h4>Second Level Component - {user}</h4>
    </div>
  );
}

export function ContextDemo() {
  const [username, setUserName] = useState("John");

  function UserChange(e) {
    setUserName(e.target.value);
  }
  return (
    <div className="container-fluid p-4 bg-dark text-white">
      <UserDetailsContext.Provider value={username}>
        <div>
          User Name : <input type="text" onChange={UserChange} />
        </div>
        <h2>Context Parent - {username}</h2>
        <FirstLevelComponent />
      </UserDetailsContext.Provider>
    </div>
  );
}
