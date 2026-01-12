import { useEffect, useState } from "react";

export function TimerEvent() {
  const [now] = useState(new Date());
  const [status, setStatus] = useState("");
  const [time, setTime] = useState("");

  function displayStatus() {
    var date = new Date();
    const hour = date.getHours();
    if (hour >= 0 && hour <= 12) {
      setStatus("Good Morning !");
    } else if (hour > 12 && hour <= 16) {
      setStatus("Good Afternoon !");
    } else {
      setStatus("Good Evening !");
    }
  }

  function Clock() {
    var now = new Date();
    var time = now.toLocaleTimeString();
    setTime(time);
  }

  useEffect(() => {
    displayStatus();
    setInterval(Clock, 1000);
  }, []);

  return (
    <div>
      <header className="bg-dark text-white  d-flex justify-content-between p-2">
        <div>
          <span>Timer App</span>
        </div>
        <div>
          <span>{status}</span>
        </div>
        <div>
          <span className="bi bi-calendar me-2">{now.toDateString()}</span>
          <span className="bi bi-clock-fill">{time}</span>
        </div>
      </header>
    </div>
  );
}
