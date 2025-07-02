import React, { useState } from 'react';

export default function About(props) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion" id="accordionPanelsStayOpenExample" >
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingOne" >
          <button
            className={`accordion-button ${!isOpen ? 'collapsed' : ''}`}
            type="button"
            onClick={toggleAccordion}
            aria-expanded={isOpen}
            aria-controls="panelsStayOpen-collapseOne"
            style={{backgroundColor : props.mode === 'dark' ? '#4d6487' : 'white' , color : props.mode === 'dark' ? 'white' : 'black' }}
          >
            <strong>About :</strong>
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
          aria-labelledby="panelsStayOpen-headingOne"
           style={{backgroundColor : props.mode === 'dark' ? '#4d6487' : 'white' ,color : props.mode === 'dark' ? 'white' : 'black' }}
        >
          <div className="accordion-body">
            <strong></strong> Hello,my name is shantanu.Welcome to my first react website.
          </div>
        </div>
      </div>
    </div>
  );
}
