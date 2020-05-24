import React from 'react';
import SearchList from './SearchList';
import styles from './SearchPage.module.css';
import fetchHotelsQuery from '../queries/fetchHotels';
import { graphql } from 'react-apollo';

export default graphql(fetchHotelsQuery)(props => {
  if (props.data.loading) {
    return (
      <div>
        <h1>LOADING...</h1>
      </div>
    );
  }

  const arrOfHotels = props.data.hotels.map(
    ({
      id,
      name,
      address,
      city,
      state,
      zipcode,
      phoneNumber,
      email,
      promoCode,
      image
    }) => {
      return {
        img: image,
        name,
        city,
        state,
        zipcode,
        address,
        phoneNumber,
        email,
        promoCode
      };
    }
  );
  return (
    <div className="container">
      <h3 className={styles.searchResult}>
        {' '}
        <span style={{ color: '#0074A3' }}> 82 hotels </span> in your location!
      </h3>
      <SearchList arrOfHotels={arrOfHotels} />
    </div>
  );
});
