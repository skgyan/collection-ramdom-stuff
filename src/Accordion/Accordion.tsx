import React, { useState } from "react"; 
import Questions from "../data";
import './style.css';

const AccordionConainer = () => {
  const [openAccordion, setOpenAccordion] = useState<string|number>('');

  const toggle = (id: string | number) => {
    console.log(id);
    if (openAccordion === id) {
      setOpenAccordion('');
    } else {
      setOpenAccordion(id);
    }
  };

  return (<div>
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
      )
    })}
  </div>);
}

const Accordion = ({
  id,
  title,
  info,  
  openAccordion,
  toggle,
}: {
  id: string | number;
  title: string;
  info: string;  
  openAccordion: string|number;
  toggle: (id: string|number) => void;
}) => {
    console.log('accordion render', id);

  return (
    <div key={id} className="accordion">
      <div className="accordion-title" onClick={() => toggle(id)}>
        <h3>{title}</h3>
        <button className="accordion-icon">{openAccordion === id ? "-" : "+"}</button>
      </div>

      {openAccordion === id && <p className="accordion-info">{info}</p>}
    </div>
  );
};

export default AccordionConainer;
