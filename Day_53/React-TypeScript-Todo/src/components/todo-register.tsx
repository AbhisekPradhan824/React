import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContract } from "../contracts/UserContract";

export function ToDoRegister() {
  const navigate = useNavigate();
  const formik = useFormik<UserContract>({
    initialValues: {
      UserId: "",
      UserName: "",
      Password: "",
      Mobile: "",
    },
    onSubmit: (values) => {
      axios.post("http://127.0.0.1:4000/adduser", values);
      alert("Registered Successfully..");
      navigate("/");
    },
  });
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <form
        onSubmit={formik.handleSubmit}
        className="w-25 bg-dark p-2 text-white rounded rounded-2"
      >
        <h2>Register New User</h2>
        <dl>
          <dt>User Id</dt>
          <dd>
            <input
              type="text"
              className="form-control"
              name="UserId"
              onChange={formik.handleChange}
            />
          </dd>
          <dt>User Name</dt>
          <dd>
            <input
              type="text"
              className="form-control"
              name="UserName"
              onChange={formik.handleChange}
            />
          </dd>
          <dt>Password</dt>
          <dd>
            <input
              type="password"
              name="Password"
              className="form-control"
              onChange={formik.handleChange}
            />
          </dd>
          <dt>Mobile</dt>
          <dd>
            <input
              type="tel"
              name="Mobile"
              className="form-control"
              onChange={formik.handleChange}
            />
          </dd>
        </dl>
        <button className="btn btn-primary w-100">Register</button>
        <Link to="/" className="btn btn-warning w-100 mt-2">
          Existing User Login
        </Link>
      </form>
    </div>
  );
}
