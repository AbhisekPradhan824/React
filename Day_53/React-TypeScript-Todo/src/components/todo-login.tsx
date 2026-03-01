import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { UserContract } from "../contracts/UserContract";
import axios from "axios";
import { useCookies } from "react-cookie";

export function ToDoLogin() {
  const [cookies, setCookie, removeCookie] = useCookies(["userId"]);

  const navigate = useNavigate();

  const formik = useFormik<UserContract>({
    initialValues: {
      UserId: "",
      Password: "",
    },
    onSubmit: (values) => {
      axios.get("http://127.0.0.1:4000/users").then((response) => {
        let user: UserContract | undefined = response.data.find(
          (item: UserContract) => item.UserId === values.UserId,
        );
        if (user) {
          if (
            user.UserId === values.UserId &&
            user.Password === values.Password
          ) {
            setCookie("userId", values.UserId);
            navigate("/appointments");
          } else {
            alert("Invalid Credentials");
            navigate("/error");
          }
        } else {
          alert("Invalid Credentials");
          navigate("/error");
        }
      });
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
        <h2 className="bi bi-person"> User Login</h2>
        <div className="mb-3">
          <label className="form-label fw-bold">User Id</label>
          <div>
            <input
              type="text"
              className="form-control"
              name="UserId"
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Password</label>
          <div>
            <input
              type="password"
              className="form-control"
              name="Password"
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="mb-2">
          <button className="btn btn-warning w-100">Login</button>
        </div>
        <div>
          <Link to="register" className="btn btn-light w-100">
            New User Register
          </Link>
        </div>
      </form>
    </div>
  );
}
