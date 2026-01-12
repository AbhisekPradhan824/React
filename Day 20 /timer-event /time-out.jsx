import { useState } from "react";

export function TimeOut() {
  const [msg, setMsg] = useState("");
  function alert1() {
    setMsg("Volume level :1");
  }
  function alert2() {
    setMsg("Volume level :2");
  }
  function alert3() {
    setMsg("Volume level :3");
  }
  function alert4() {
    setMsg("Volume level :4");
  }
  function plusClick() {
    setTimeout(alert1, 2000);
    setTimeout(alert2, 4000);
    setTimeout(alert3, 6000);
    setTimeout(alert4, 10000);
  }
  return (
    <div>
      <button className="btn btn-primary m-4 p-2" onClick={plusClick}>
        <span className="bi bi-plus-lg"></span>
      </button>
      <p>{msg}</p>
    </div>
  );
}
