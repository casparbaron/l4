import React from 'react';
import { PopupWidget } from 'react-calendly';

const PopupComponent = () => {
  return (
    <div className="popup-widget">
      <PopupWidget
        url="https://calendly.com/team-l4" 
        rootElement={document.getElementById('root')}
        text="get in contact"
        textColor="#BF2604"
        color="#ffffff"
      />
    </div>
  );
};

export default PopupComponent;
