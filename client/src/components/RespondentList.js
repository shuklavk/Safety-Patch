import React from 'react';
import RespondentCard from './RespondentCard';
import fetchRespondentsByAgencyIdQuery from '../queries/fetchRespondentsByAgencyId';
import { left } from '@popperjs/core';
import { graphql } from 'react-apollo';

export default graphql(fetchRespondentsByAgencyIdQuery)(props => {
  console.log('data?', props.data.respondents);

  if (props.data.loading) {
    return (
      <div>
        <h1>LOADING...</h1>
      </div>
    );
  }
  const arrOfRespondentCard = props.data.respondents.map(resp => {
    return <RespondentCard key={resp.id} resp={resp} />;
  });
  return (
    <div className="container">
      <h2
        style={{ color: '#0074a3', paddingLeft: '313px', marginBottom: '20px' }}
      >
        Requests
      </h2>
      {arrOfRespondentCard}
    </div>
  );
});
