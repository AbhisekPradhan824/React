import { useState } from "react";

export function MouseMove() {
  const [styleObject, setStyleObject] = useState({
    position: "",
    top: "",
    left: "",
  });

  function handleMouseMove(e) {
    setStyleObject({
      position: "Fixed",
      top: e.clientY + "px",
      left: e.clientX + "px",
    });
  }

  return (
    <div onMouseMove={handleMouseMove}>
      <div style={{ height: "1000px" }}>
        <h2>This is heading</h2>
      </div>

      <img src="m1.png" alt="" height="50" width="30" style={styleObject} />
    </div>
  );
}
