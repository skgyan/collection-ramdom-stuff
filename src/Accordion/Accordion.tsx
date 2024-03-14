import React from "react";

const Accordion = ({
  id,
  title,
  info,  
  openAccordion,
  toggle,
}: {
  id: string;
  title: string;
  info: string;  
  openAccordion: string;
  toggle: (id: string) => void;
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

export default Accordion;
