import React from 'react';

function AppMain({ timeInfo: { hours, minute, seconds } }) {
  return (
    <div>
      <h1>{hours} : {minute} : {seconds}</h1>
    </div>)
}

export default AppMain