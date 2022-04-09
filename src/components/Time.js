import React, { useEffect, useState } from 'react';

//css
import './Time.css';

const MainPage = () => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit',
    })
  );

  useEffect(() => {
    setInterval(getTime, 1000);
  }, []);

  const getTime = () => {
    const currTime = new Date().toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit',
    });
    setTime(currTime);
  };

  return (
    <>
      <div className={'time-header'}>{time}</div>
    </>
  );
};

export default MainPage;
