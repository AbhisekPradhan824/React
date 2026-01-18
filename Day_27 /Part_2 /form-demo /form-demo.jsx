import { useFormik } from "formik";

export function FormDemo() {
  const formik = useFormik({
    initialValues: {
      UserName: "",
      Password: "",
      Number: "",
      Gender: "",
      City: "",
    },
    onSubmit: (value) => {
      alert(JSON.stringify(value));
    },
  });
  return (
    <div className="container-fluid">
      <h2>Register User</h2>
      <form className="w-25">
        <dl>
          <dt>UserName</dt>
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
              className="form-control"
              name="Password"
              onChange={formik.handleChange}
            />
          </dd>
          <dt>Mobile</dt>
          <dd>
            <input
              type="text"
              className="form-control"
              onChange={formik.handleChange}
            />
          </dd>
          <dt>Gender</dt>
          <dd>
            <input
              type="radio"
              name="Gender"
              value="Male"
              onChange={formik.handleChange}
            />
            <label>Male</label>
            <input
              type="radio"
              name="Gneder"
              value="Female"
              onChange={formik.handleChange}
            />
            <label>Female</label>
          </dd>
          <dt>City</dt>
          <dd>
            <select className="form-select" onChange={formik.handleChange}>
              <option value="-1">Select City</option>
              <option value="Delhi">Del</option>
              <option value="Hyderabaad">Hyd</option>
            </select>
          </dd>
        </dl>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={formik.handleSubmit}
        >
          Register
        </button>
      </form>
    </div>
  );
}
