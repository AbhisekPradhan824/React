import axios from "axios";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
export function ToDoApp() {
  const [appointments, setAppointments] = useState([]);
  const [toggleAdd, setToggleAdd] = useState({ display: "block" });
  const [toggleEdit, setToggleEdit] = useState({ display: "none" });
  const [editableAppointment, setEditableAppointment] = useState({
    Id: 0,
    Title: "",
    Date: new Date(),
    Description: "",
  });
  const formik = useFormik({
    initialValues: {
      Id: 0,
      Title: "",
      Date: new Date(),
      Description: "",
    },
    onSubmit: (appointment) => {
      axios.post("http://127.0.0.1:4000/addtask", appointment);
      alert("Appointment Added Successfully..");
      window.location.reload();
    },
  });

  function LoadAppointments() {
    axios.get("http://127.0.0.1:4000/appointments").then((response) => {
      setAppointments(response.data);
    });
  }
  function handleDeleteClick(e) {
    var id = parseInt(e.target.value);
    var flag = window.confirm(`Are you sure ?\n Wanted to delete..`);
    if (flag) {
      axios.delete(`http://127.0.0.1:4000/deletetask/${id}`);
      alert("record deleted..");
      window.location.reload();
    }
  }
  function handleEditClick(id) {
    setToggleAdd({ display: "none" });
    setToggleEdit({ display: "block" });
    axios.get(`http://127.0.0.1:4000/appointment/${id}`).then((response) => {
      setEditableAppointment(response.data);
    });
  }

  function handleCancelClick() {
    setToggleAdd({ display: "block" });
    setToggleEdit({ display: "none" });
  }

  function handleSaveClick(id) {
    //axios PUT method
    axios.put(`http://127.0.0.1:4000/${id}`, editableAppointment);
    setToggleAdd({ display: "block" });
    setToggleEdit({ display: "none" });
  }

  useEffect(() => {
    LoadAppointments();
  }, []);
  return (
    <div className="container-fluid">
      <h1 className="text-center">To DO App</h1>
      <header>
        <div aria-label="AddAppointment" style={toggleAdd}>
          <label className="form-label fw-bold">Add new Appointment</label>
          <div>
            <form className="w-50" onSubmit={formik.handleSubmit}>
              <div className="d-flex">
                <input
                  type="number"
                  name="Id"
                  className="form-control"
                  onChange={formik.handleChange}
                />
                <input
                  type="text"
                  name="Title"
                  className="form-control"
                  placeholder="Title"
                  onChange={formik.handleChange}
                />
                <input
                  type="date"
                  name="Date"
                  className="form-control"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="mt-2">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  name="Description"
                  onChange={formik.handleChange}
                ></textarea>
                <div className="mt-2">
                  <button className="btn btn-primary">Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div aria-label="EditAppointment" style={toggleEdit}>
          <label className="form-label fw-bold">Edit Appointment</label>
          <div>
            <form className="w-50">
              <div className="d-flex">
                <input
                  type="number"
                  name="Id"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={editableAppointment.Id}
                />
                <input
                  type="text"
                  name="Title"
                  className="form-control"
                  placeholder="Title"
                  onChange={formik.handleChange}
                  value={editableAppointment.Title}
                />
                <input
                  type="date"
                  name="Date"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={new Date(editableAppointment.Date)}
                />
              </div>
              <div className="mt-2">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  name="Description"
                  onChange={formik.handleChange}
                  value={editableAppointment.Description}
                ></textarea>
                <div className="mt-2">
                  <button
                    className="btn btn-success me-2"
                    onClick={() => {
                      handleSaveClick(editableAppointment.Id);
                    }}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleCancelClick}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </header>
      <main className="mt-4">
        <div>
          <label className="form-label fw-bold">Your Appointments</label>
          <div className="d-flex flex-wrap">
            {appointments.map((appointment) => (
              <div
                className="alert alert-dismissible alert-success w-25 me-2"
                key={appointment.Id}
              >
                <button
                  className="btn btn-close"
                  value={appointment.Id}
                  onClick={handleDeleteClick}
                ></button>
                <div className="alert-title h5">{appointment.Title}</div>
                <p>{appointment.Description}</p>
                <span className="bi bi-calendar me-1"></span>
                {new Date(appointment.Date).toLocaleString()}
                <div className="mt-3">
                  <button
                    className="bi bi-pencil-fill btn btn-warning"
                    onClick={() => {
                      handleEditClick(appointment.Id);
                    }}
                  ></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
