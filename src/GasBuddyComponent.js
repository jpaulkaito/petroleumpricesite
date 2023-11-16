// GasBuddyComponent.js

import React, { useEffect } from 'react';

const GasBuddyComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://df.gasbuddy.com/feed.df?k=5lIMymNWdHvnOEcmWDY6AVkwNY%2feQmiwMLqQoHKlHYKJ0fgJSqKYxH0FmjkCOz4S1fbeq%2bDzPenzDDWZA8U1Sw%3d%3d&ia=1&i=29814';
    script.type = 'text/javascript';
    script.async = true;
    document.getElementById('gasbuddy_29814').appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.getElementById('gasbuddy_29814').removeChild(script);
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <table width="100%">
      <tbody>
        <tr>
          <td align="center" id="gasbuddy_29814"></td>
        </tr>
      </tbody>
    </table>
  );
};

export default GasBuddyComponent;
