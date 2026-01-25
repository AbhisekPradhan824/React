import axios from "axios";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

// Reusable validation schema
const appointmentValidationSchema = yup.object({
  Title: yup.string().required("Title is required").max(25, "Max length is 25"),
  Date: yup
    .date()
    .required("Date is required")
    .min(
      new Date(new Date().setHours(0, 0, 0, 0)),
      "Date cannot be in the past",
    ),
  Description: yup
    .string()
    .required("Please provide description")
    .max(150, "Limit should not exceed"),
});

// Helper to get today's date in YYYY-MM-DD format
const getTodayString = () => new Date().toISOString().split("T")[0];

export function ToDoApp() {
  const [appointments, setAppointments] = useState([]);
  const [toggleAdd, setToggleAdd] = useState({ display: "block" });
  const [toggleEdit, setToggleEdit] = useState({ display: "none" });
  const [editAppointment, setEditAppointment] = useState({
    Id: 0,
    Title: "",
    Date: "",
    Description: "",
  });

  // Add Form
  const formik = useFormik({
    initialValues: {
      Id: Math.round(Math.random() * 100),
      Title: "",
      Date: "",
      Description: "",
    },
    validationSchema: appointmentValidationSchema,
    onSubmit: async (appointment, { resetForm }) => {
      try {
        await axios.post("http://127.0.0.1:4000/addtask", appointment);
        alert("Appointment Added Successfully..");
        resetForm({
          values: {
            Id: Math.round(Math.random() * 100),
            Title: "",
            Date: "",
            Description: "",
          },
        });
        LoadAppointments();
      } catch (error) {
        console.error("Error adding appointment:", error);
        alert("Failed to add appointment");
      }
    },
  });

  // Edit Form
  const editFormik = useFormik({
    initialValues: {
      Id: editAppointment.Id,
      Title: editAppointment.Title,
      Date: editAppointment.Date
        ? editAppointment.Date.slice(0, editAppointment.Date.indexOf("T"))
        : "",
      Description: editAppointment.Description,
    },
    enableReinitialize: true,
    validationSchema: appointmentValidationSchema,
    onSubmit: async (appointment) => {
      try {
        await axios.put(
          `http://127.0.0.1:4000/edittask/${editAppointment.Id}`,
          appointment,
        );
        alert("Appointment modified successfully");
        handleCancelClick();
        LoadAppointments();
      } catch (error) {
        console.error("Error updating appointment:", error);
        alert("Failed to update appointment");
      }
    },
  });

  function LoadAppointments() {
    axios
      .get("http://127.0.0.1:4000/appointments")
      .then((response) => {
        setAppointments(response.data);
      })
      .catch((error) => {
        console.error("Failed to load appointments:", error);
      });
  }

  function handleDeleteClick(e) {
    const id = parseInt(e.target.value);
    const flag = window.confirm("Are you sure?\nWanted to delete..");
    if (flag) {
      axios
        .delete(`http://127.0.0.1:4000/deletetask/${id}`)
        .then(() => {
          alert("Record deleted..");
          LoadAppointments();
        })
        .catch((error) => {
          console.error("Error deleting appointment:", error);
          alert("Failed to delete appointment");
        });
    }
  }

  function handleEditClick(id) {
    setToggleAdd({ display: "none" });
    setToggleEdit({ display: "block" });
    axios
      .get(`http://127.0.0.1:4000/appointment/${id}`)
      .then((response) => {
        setEditAppointment(response.data);
      })
      .catch((error) => {
        console.error("Error fetching appointment:", error);
      });
  }

  function handleCancelClick() {
    setToggleAdd({ display: "block" });
    setToggleEdit({ display: "none" });
    editFormik.resetForm();
  }

  useEffect(() => {
    LoadAppointments();
  }, []);

  return (
    <div className="container-fluid">
      <h1 className="text-center">To Do App</h1>
      <header>
        {/* Add Appointment Form */}
        <div aria-label="AddAppointment" style={toggleAdd}>
          <label className="form-label fw-bold">Add new Appointment</label>
          <div>
            <form className="w-50" onSubmit={formik.handleSubmit}>
              <div className="d-flex gap-2">
                <input type="hidden" name="Id" value={formik.values.Id} />
                <div className="flex-grow-1">
                  <input
                    type="text"
                    name="Title"
                    className={`form-control ${
                      formik.touched.Title && formik.errors.Title
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="Title"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Title}
                  />
                </div>
                <div>
                  <input
                    type="date"
                    name="Date"
                    className={`form-control ${
                      formik.touched.Date && formik.errors.Date
                        ? "is-invalid"
                        : ""
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Date}
                    min={getTodayString()}
                  />
                </div>
              </div>
              {/* Error messages for Title and Date */}
              <div className="text-danger small mt-1">
                {formik.touched.Title && formik.errors.Title && (
                  <div>{formik.errors.Title}</div>
                )}
                {formik.touched.Date && formik.errors.Date && (
                  <div>{formik.errors.Date}</div>
                )}
              </div>
              <div className="mt-2">
                <label className="form-label">Description</label>
                <textarea
                  className={`form-control ${
                    formik.touched.Description && formik.errors.Description
                      ? "is-invalid"
                      : ""
                  }`}
                  name="Description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Description}
                ></textarea>
                {formik.touched.Description && formik.errors.Description && (
                  <small className="text-danger">
                    {formik.errors.Description}
                  </small>
                )}
                <div className="mt-2">
                  <button type="submit" className="btn btn-primary">
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Edit Appointment Form */}
        <div aria-label="EditAppointment" style={toggleEdit}>
          <label className="form-label fw-bold">Edit Appointment</label>
          <div>
            <form className="w-50" onSubmit={editFormik.handleSubmit}>
              <div className="d-flex gap-2">
                <input type="hidden" name="Id" value={editFormik.values.Id} />
                <div className="flex-grow-1">
                  <input
                    type="text"
                    name="Title"
                    className={`form-control ${
                      editFormik.touched.Title && editFormik.errors.Title
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="Title"
                    onChange={editFormik.handleChange}
                    onBlur={editFormik.handleBlur}
                    value={editFormik.values.Title}
                  />
                </div>
                <div>
                  <input
                    type="date"
                    name="Date"
                    className={`form-control ${
                      editFormik.touched.Date && editFormik.errors.Date
                        ? "is-invalid"
                        : ""
                    }`}
                    onChange={editFormik.handleChange}
                    onBlur={editFormik.handleBlur}
                    value={editFormik.values.Date}
                    min={getTodayString()}
                  />
                </div>
              </div>
              {/* Error messages for Title and Date */}
              <div className="text-danger small mt-1">
                {editFormik.touched.Title && editFormik.errors.Title && (
                  <div>{editFormik.errors.Title}</div>
                )}
                {editFormik.touched.Date && editFormik.errors.Date && (
                  <div>{editFormik.errors.Date}</div>
                )}
              </div>
              <div className="mt-2">
                <label className="form-label">Description</label>
                <textarea
                  className={`form-control ${
                    editFormik.touched.Description &&
                    editFormik.errors.Description
                      ? "is-invalid"
                      : ""
                  }`}
                  name="Description"
                  onChange={editFormik.handleChange}
                  onBlur={editFormik.handleBlur}
                  value={editFormik.values.Description}
                ></textarea>
                {editFormik.touched.Description &&
                  editFormik.errors.Description && (
                    <small className="text-danger">
                      {editFormik.errors.Description}
                    </small>
                  )}
                <div className="mt-2">
                  <button
                    type="submit"
                    className="btn btn-success me-2"
                    disabled={!editFormik.dirty || !editFormik.isValid}
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
            {appointments.length === 0 ? (
              <p className="text-muted">No appointments found.</p>
            ) : (
              appointments.map((appointment) => (
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
                  {appointment.Date.slice(0, appointment.Date.indexOf("T"))}
                  <div className="mt-3">
                    <button
                      className="bi bi-pencil-fill btn btn-warning"
                      onClick={() => {
                        handleEditClick(appointment.Id);
                      }}
                    ></button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
