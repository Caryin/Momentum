import React, { useEffect, useState } from 'react';

//css
import './Quote.css';

const URL = 'https://type.fit/api/quotes';

function Quote() {
  const [getQuote, setGetQuote] = useState([]);

  const fetchQuote = async () => {
    const res = await fetch(URL);
    const data = await res.json();

    const random = Math.floor(Math.random() * data.length);

    setGetQuote(data[random].text);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className='quote'>
      <center>"{getQuote}"</center>
    </div>
  );
}

export default Quote;
