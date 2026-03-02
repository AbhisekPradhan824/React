import { useCaptcha } from "../../hooks/captcha";

export function UserLogin() {
  const captcha = useCaptcha();
  return (
    <div className="container-fluid">
      <h3>User Login</h3>
      <dl>
        <dt>UserId</dt>
        <dd>
          <input type="text" />
        </dd>
        <dt>Password</dt>
        <dd>
          <input type="password" name="Password" />
        </dd>
        <dt>Verify Code</dt>
        <dd>{captcha}</dd>
      </dl>
      <button>Login</button>
    </div>
  );
}
