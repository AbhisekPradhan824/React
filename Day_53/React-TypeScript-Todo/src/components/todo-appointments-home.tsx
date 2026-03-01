import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { AppointmentContract } from "../contracts/AppointmentContract";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function ToDoAppointmentsHome() {
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies(["userId"]);

  const [appointments, setAppointments] = useState<AppointmentContract[]>([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:4000/userappointments/${cookies["userId"]}`)
      .then((response) => {
        setAppointments(response.data);
      });
  }, []);

  function handleLogout() {
    removeCookie("userId");
    navigate("/");
  }

  function handleRemoveClick(e: any) {
    axios.delete(`http://127.0.0.1:4000/deletetask/${e.target.value}`);
    window.location.reload();
  }

  return (
    <div className="p-4 text-white">
      <h4>
        Your Appointments - {cookies.userId}{" "}
        <button onClick={handleLogout} className="btn btn-danger p-2">
          Logout
        </button>
      </h4>
      <div className="mt-2 mb-2">
        <button className="bi bi-calendar btn btn-primary">
          Add Appointment
        </button>
      </div>

      <main>
        {appointments.map((appointment) => (
          <div className="card alert alert-warning alert-dismissible p-2">
            <div className="card-header">
              <h4>{appointment.Title}</h4>
              <button
                onClick={handleRemoveClick}
                className="btn btn-close"
                value={appointment.Id}
              ></button>
            </div>
            <div className="card-body">
              <p>{appointment.Description}</p>
              <p className="text-end text-secondary">
                {appointment.Date.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
