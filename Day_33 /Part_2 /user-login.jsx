
export function UserLogin(props) {
  return (
    <div className="container-fluid">
      <dl className={props.Theme}>
        <h3>{props.Title}</h3>
        <dt>{props.userLabel}</dt>
        <dd>
          <input type={props.userType} className="form-control w-100" />
        </dd>
        <dt>{props.Verify}</dt>
        <dd>
          <input type={props.VerifyType} className="form-control w-100" />
        </dd>
        <button className={props.ButtonType}>Login</button>
      </dl>
    </div>
  );
}
