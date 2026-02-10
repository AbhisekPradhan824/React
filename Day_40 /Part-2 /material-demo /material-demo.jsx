import { TextField } from "@mui/material";
import { useState } from "react";

export function MaterialDemo() {
  const [userName, setUserName] = useState("");
  function handleNameChange(e) {
    setUserName(e.target.value);
  }
  return (
    <div className="container-fluid">
      <div className="w-25">
        <h3>Bootstrap Style</h3>
        <label className="form-label">User Name</label>
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Name"
          />
        </div>
      </div>
      <div className="w-25">
        <h3>React MUI</h3>
        <TextField
          variant="outlined"
          label="User Name"
          color="success"
          onChange={handleNameChange}
        />
      </div>
      <p>Hello ! {userName}</p>
    </div>
  );
}
