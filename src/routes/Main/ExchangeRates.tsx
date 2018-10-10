import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const ExchangeRates = () => (
  <Query
    query={gql`
      query {
        viewer {
          login
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) {
        return <p>Loading...</p>;
      }
      if (error) {
        return <p>Error :(</p>;
      }

      return data.rates.map(({ currency, rate }: any) => (
        <div key={currency}>
          <p>{`${currency}: ${rate}`}</p>
        </div>
      ));
    }}
  </Query>
);

export default ExchangeRates;
