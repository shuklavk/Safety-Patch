import React from 'react';
import SearchCard from './SearchCard';
import styles from './SearchList.module.css';

export default ({ arrOfHotels }) => {
  const hotelCards = arrOfHotels.map(hotel => {
    return <SearchCard img={hotel.img} name={hotel.name} />;
  });
  return (
    <div className={`container ${styles.searchResults}`}>{hotelCards}</div>
  );
};
