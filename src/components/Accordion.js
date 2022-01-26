import React, { useState } from 'react';

const Accordion = ({ content }, { setContent }) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const [isActive, setIsActive] = useState(false);
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1 }/${current.getFullYear()}`;

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{date}</div>
        <div className='accordion-item_toggle'>{isActive ? "⯅" : "⯆"}</div>
      </div>
      {isActive && <div className="accordion-item_content">{content}</div>}
    </div>
  );
};

export default Accordion;