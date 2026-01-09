import { useState } from "react";

export function EventBinding() {
  const [msg, setMsg] = useState("");

  function Database(e) {
    switch (e.target.name) {
      case "Insert":
        setMsg("Insert Button is Clicked");
        break;
      case "Update":
        setMsg("Update Button Clicked");
        break;
      case "Delete":
        setMsg("Delete Message is Clicked");
        break;
      default:
        setMsg("");
    }
  }

  return (
    <div>
      <h2>Event Binding</h2>
      <button name="Insert" onClick={Database}>
        Insert
      </button>
      <button name="Update" onClick={Database}>
        Update
      </button>
      <button name="Delete" onClick={Database}>
        Delete
      </button>
      <p>{msg}</p>
    </div>
  );
}
