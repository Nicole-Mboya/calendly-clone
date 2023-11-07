import React, { useEffect } from 'react';
import axios from 'axios';

const YourComponent = () => {
  useEffect(() => {
    // Make an API request to Calendly to generate the embed code
    axios
      .get('https://calendly.com/nikolmboya?hide_landing_page_details=1&hide_gdpr_banner=1', {
        headers: {
          'X-TOKEN': 'ZDXIJVCXIM6IUX4GKSGARX34B6BUSIWC',
        },
      })
      .then((response) => {
        // Use the response data to set the HTML of your component
        const embedCode = response.data.html;
        document.getElementById('calendly-embed').innerHTML = embedCode;
      })
      .catch((error) => {
        console.error('Error fetching Calendly embed code:', error);
      });
  }, []);

  return (
    <div>
      <h1>Your React Component</h1>
      <div id="calendly-embed"></div>
    </div>
  );
};

export default YourComponent;
