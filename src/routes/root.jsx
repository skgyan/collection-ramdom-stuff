import { Outlet } from "react-router-dom";
export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Goto</h1>
        <nav>
          <ul>
            <li>
              <a href={`/auto-increment-counter`}>Auto Increment Counter</a>
            </li>
            <li>
              <a href={`/accordion`}>Accordion</a>
            </li>
            <li>
              <a href={`/auto-complete`}>Auto Complete</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
