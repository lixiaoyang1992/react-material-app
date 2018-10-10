import * as React from 'react';
import AppBar from './AppBar';
import ExchangeRates from './ExchangeRates';

const Main: React.SFC = () => {
  return (
    <React.Fragment>
      <AppBar />
      <div className="a" style={{ paddingTop: 80 }}>
        <ExchangeRates />
      </div>
    </React.Fragment>
  );
};

export default Main;
