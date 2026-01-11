import { useState } from "react";

export function OnCutCopyPasteDemo() {
  const [msg, setMsg] = useState("");
  return (
    <div className="container-fluid">
      <h1>Register User</h1>
      <dl className="w-25">
        <dt>username</dt>
        <dd>
          <input type="text" className="form-control" />
        </dd>
        <dt>password</dt>
        <dd>
          <input type="password" className="form-control" />
        </dd>
        <dt>Confirm Password</dt>
        <dd>
          <input type="password" className="form-control" />
        </dd>
        <dt>Our terms and Conditions</dt>
        <dd>
          <textarea
            name="txtArea"
            cols={14}
            rows={10}
            onCut={() => {
              setMsg("Text Cut and saved in clipboard");
            }}
            onCopy={() => setMsg("Text Copied to Clipboard")}
            onPaste={() => setMsg("Paste successful")}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            sapiente eos dignissimos asperiores dolor? Voluptates itaque rerum
            tempore consequatur exercitationem at perferendis mollitia veritatis
            quae alias. Vero autem quia cumque!
          </textarea>
        </dd>
        <dd>{msg}</dd>
      </dl>
    </div>
  );
}
