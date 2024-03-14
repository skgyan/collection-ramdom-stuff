import { useState } from "react";
import "./App.css";
import Accordion from "./Accordion/Accordion";
import Questions from "./data";

function App() {
  const [openAccordion, setOpenAccordion] = useState(0);

  const toggle = (id) => {
    console.log(id);
    if (openAccordion === id) {
      setOpenAccordion(0);
    } else {
      setOpenAccordion(id);
    }
  };

  return (
    <>
      <div className="App">
        Accordion
        {Questions.map((question) => {
          return (
            <Accordion
              key={question.id}
              id={question.id}
              title={question.title}
              info={question.info}
              openAccordion={openAccordion}
              toggle={toggle}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
