import { useState } from "react";
import "./event-binding.css";

export function EventBinding() {
  const [images] = useState(["m1.png", "m2.png", "m3.png", "m4.png"]);

  const [preview, setPreview] = useState("m1.png");

  function handleMouseOver(e) {
    setPreview(e.target.src);
  }

  return (
    <div className="container-fluid">
      <section className="mt-4 row">
        <nav className="col-2 ">
          {images.map((imagePath) => (
            <div
              key={imagePath}
              className="mb-4 p-2"
              style={{ width: "200px" }}
            >
              <img
                onMouseOver={handleMouseOver}
                src={imagePath}
                alt=""
                width="100"
                height="100"
              />
            </div>
          ))}
        </nav>
        <main className="col-10 d-flex justify-content-center align-items-center">
          <div
            className="overflow-hidden"
            style={{ height: "400px", width: "400px" }}
          >
            <img src={preview} alt="" width="400" height="400" />
          </div>
        </main>
      </section>
    </div>
  );
}
