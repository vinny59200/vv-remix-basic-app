import {Link} from '@remix-run/react'
export default function Nested() {
  return (
    <form method="post" id="vvform">
      <h1>Nested</h1>
      <p>
        <label htmlFor="vv-msg">Message:</label>
        <input type="text" id="vv-msg" name="msg" required />
      </p>
      <div>
        <button>log message</button>
      </div>
    </form>
  );
}

export async function action(data) {
  const vvMsgData = await data.request.formData();
  console.log("VV-start")
  console.log(vvMsgData.get('msg'));
  // vvMsgData.wrongMethod();
  console.log("VV-end")
  return vvMsgData;
}

export function ErrorBoundary() {
  return (
    <>
      <h1>Uhm! 😓</h1>
      <Link to="/">Let's go home.</Link>
    </>
  );
}

