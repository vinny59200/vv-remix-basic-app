import {Link} from '@remix-run/react'
export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Main Route Content</h1>
      <Link to="/nested">Go to Nested Route</Link>
    </div>
  );
}
