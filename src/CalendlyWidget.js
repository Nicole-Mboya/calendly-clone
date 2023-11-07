import React, { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    // Create a new script element
    const script = document.createElement('script');

    // Set the source and async attributes
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    // Append the script to the document
    document.body.appendChild(script);

    // Clean up the script element on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="calendly-inline-widget" data-url="https://calendly.com/nikolmboya?hide_landing_page_details=1&hide_gdpr_banner=1" style={{ minWidth: '320px', height: '700px' }}></div>
  );
};

export default CalendlyWidget;
