import React, { useState } from 'react';
const MainContent= () => {
  const [showCalendly, setShowCalendly] = useState(false);

  const toggleCalendly = () => {
    setShowCalendly(!showCalendly);
  };

  return (
    <div className="Main-Content">
      <div className="welcome">
          <h2 >Easy Scheduling Ahead</h2>
  </div>
  <div className="message">
       <p>This is a personalized calendly landing page where you can schedule a meeting with Nicole Mboya.</p>
  </div>
  <div className="BookMe">
    <button onClick={toggleCalendly}>Book Now</button>
    {showCalendly && (
        <div className="calendly-popup">
          <iframe
            src="https://calendly.com/nikolmboya/nicolemboya?hide_landing_page_details=1&hide_gdpr_banner=1"
            
          />
        </div>
      )}
  </div>
  </div>
      
  );


  }
export default MainContent;