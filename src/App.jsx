import { lazy } from "react";
import "./App.css";
const Accordion = lazy(() => import("./Accordion/Accordion"));

function App() {
  return (
    <>
      <Accordion />
    </>
  );
}

export default App;
