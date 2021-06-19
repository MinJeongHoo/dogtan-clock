import React from 'react';


function AppMain({ timeInfo: { hours, minute, seconds } }) {
  let text = '';
  if (5 <= hours && hours < 12) {
    text = 'Good Morning';
  }
  else if (12 <= hours && hours < 19) {
    text = 'Good After Noon'
  }
  else if (19 <= hours && hours < 5) {
    text = 'Good Evening';
  }
  return (
    <div>
      <p>{text}</p>
      <p>{hours} : {minute} : {seconds}</p>
    </div>)
}

export default AppMain