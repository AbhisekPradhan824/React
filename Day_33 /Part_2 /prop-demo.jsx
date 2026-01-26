
import { UserLogin } from "../../components-library/userLogin";

export function PropsDemo() {
  return (
    <div className="container-fluid">
      <h1>Shopping Home</h1>
      <UserLogin
        Title="Enter UserId and Password"
        userLabel="Enter Email"
        userType="text"
        Verify="Password"
        VerifyType="password"
        Theme="w-25 bg-primary text-white p-2 text-center"
        ButtonType="btn btn-light w-50"
      />
      <hr />
      <UserLogin
        Title="Enter email and code"
        userLabel="Enter Email"
        userType="email"
        Verify="Code"
        VerifyType="number"
        Theme="w-50 bg-warning text-white p-2 text-center"
        ButtonType="btn btn-danger w-50"
      />
    </div>
  );
}
