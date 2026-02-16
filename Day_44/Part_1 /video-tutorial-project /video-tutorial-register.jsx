import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function TutorialRegister() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [userError, setUserError] = useState("");

  const formik = useFormik({
    initialValues: {
      UserId: "",
      UserName: "",
      Password: "",
      Mobile: "",
    },
    onSubmit: (user) => {
      axios.post("http://127.0.0.1:4040/registeruser", user);
      alert("Registered Successfully...");
      navigate("/login");
    },
  });

  function VerifyUserId(e) {
    for (var user of users) {
      if (user.UserId === e.target.value) {
        setUserError("User Id Taken - Try Another");
        break;
      } else {
        setUserError("User Id Available");
      }
    }
  }
  useEffect(() => {
    axios
      .get("http://127.0.0.1:4040/users")
      .then((response) => setUsers(response.data));
  }, []);
  return (
    <div>
      <form className="w-50">
        <h3>User Register</h3>
        <dl>
          <dt>User Id</dt>
          <dd>
            <input
              type="text"
              className="form-control"
              name="UserId"
              onChange={formik.handleChange}
              onKeyUp={VerifyUserId}
            />
          </dd>
          <dd>{userError}</dd>
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
              type="text"
              className="form-control"
              name="Mobile"
              onChange={formik.handleChange}
            />
          </dd>
        </dl>

        <button onClick={formik.handleSubmit} className="btn btn-success me-2 ">
          Register
        </button>
        <button type="reset" className="btn btn-danger">
          Cancel
        </button>
      </form>
      <p>
        <Link to="/login">Existing user ? login</Link>
      </p>
    </div>
  );
}
