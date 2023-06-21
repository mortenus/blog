import React from 'react';

import QuoteLeftIcon from '/public/images/quote-left-solid.svg';

import axios from 'axios';

const initialState = {
  quoteText: '',
  quoteAuthor: '',
};

export default function Quotes() {
  const [quoteData, setQuoteData] = React.useState(initialState);
  const [isLoading, setIsLoading] = React.useState(true);

  const getQuote = () => {
    setIsLoading(true);
    axios
      .get('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json')
      .then((res) => {
        if (quoteData === res.data) {
          getQuote();
          return;
        }
        console.log(res.data);
        setQuoteData(res.data);
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    getQuote();
  }, []);

  const handleClick = () => {
    getQuote();
  };

  return (
    <div className="quote">
      {!isLoading ? (
        <div className="quote-main">
          <div className="quote-content">
            <h2 className="quote-description">
              <svg
                className="quote-img"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="quote-left"
                // class="svg-inline--fa fa-quote-left fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
              </svg>
              {/* <img
                className="quote-img"
                src={'/public/images/quote-left-solid.svg'}
                alt="quotes icon"
              /> */}
              {quoteData.quoteText}
            </h2>
            <p className="quote-author">{quoteData.quoteAuthor}</p>
          </div>
          <div className="quote-buttons">
            <div className="button twitter">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M41.3752 8.63976C39.914 9.28726 38.3442 9.72477 36.694 9.92252C38.3967 8.90365 39.6706 7.30008 40.278 5.41101C38.6782 6.36125 36.9273 7.03011 35.1015 7.38851C33.8737 6.07753 32.2473 5.20858 30.4751 4.91659C28.7028 4.6246 26.8837 4.9259 25.3002 5.77371C23.7167 6.62151 22.4573 7.9684 21.7178 9.60525C20.9782 11.2421 20.7997 13.0773 21.21 14.826C17.9684 14.6633 14.7973 13.8207 11.9025 12.3531C9.00763 10.8855 6.45371 8.82555 4.40649 6.30701C3.70649 7.51451 3.30399 8.91451 3.30399 10.4055C3.30321 11.7478 3.63375 13.0694 4.26628 14.2533C4.89881 15.4372 5.81377 16.4466 6.92999 17.192C5.63547 17.1508 4.36952 16.801 3.23749 16.1718V16.2768C3.23736 18.1593 3.88855 19.9839 5.08056 21.441C6.27257 22.8981 7.93199 23.8979 9.77724 24.2708C8.57636 24.5958 7.31733 24.6436 6.09524 24.4108C6.61586 26.0306 7.62998 27.4471 8.99563 28.4619C10.3613 29.4767 12.0101 30.0391 13.7112 30.0703C10.8234 32.3372 7.25704 33.5669 3.58574 33.5615C2.93541 33.5617 2.28562 33.5237 1.63974 33.4478C5.36632 35.8438 9.70433 37.1155 14.1347 37.1105C29.1322 37.1105 37.331 24.689 37.331 13.916C37.331 13.566 37.3222 13.2125 37.3065 12.8625C38.9012 11.7092 40.2778 10.2811 41.3717 8.64501L41.3752 8.63976V8.63976Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="button" onClick={handleClick}>
              New Quote
            </div>
          </div>
        </div>
      ) : (
        <div className="loader" />
      )}
    </div>
  );
}
