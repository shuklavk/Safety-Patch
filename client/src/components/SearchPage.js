import React from 'react';
import SearchList from './SearchList';
import styles from './SearchPage.module.css';

export default () => {
  const arrOfHotels = [
    {
      img:
        'https://ihg.scene7.com/is/image/ihg/even-hotels-eugene-5405616297-4x3',
      name: 'Hotel1'
    },
    {
      img:
        'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768',
      name: 'Hotel2'
    },
    {
      img: 'https://q-cf.bstatic.com/images/hotel/max1024x768/681/68184730.jpg',
      name: 'Hotel3'
    },
    {
      img:
        'https://www.fashionislandhotel.com/images/FIH_Homepage_HotelView-1-1920x1080.jpg',
      name: 'Hotel4'
    },
    {
      img:
        'https://pix10.agoda.net/hotelImages/620/6206755/6206755_18120621090070141580.jpg?s=1024x768',
      name: 'Hotel5'
    },
    {
      img: 'https://travelji.com/wp-content/uploads/Hotel-Tips.jpg',
      name: 'Hotel6'
    },
    {
      img:
        'https://www.baglionihotels.com/wp-content/themes/baglioni-hotels-new/images/schema/baglioni-hotel-london.jpg',
      name: 'Hotel7'
    },
    {
      img:
        'https://media.onomohotel.com/images/cache/gd2/799x800ke/0/05/580-imagetxmmip.jpg',
      name: 'Hotel8'
    },
    {
      img:
        'https://fastrack-cross-hotels-and-resorts.imgix.net/public/X2-Vibe-Buriram-Hotel/72b3085360/X2-Vibe-Buriram-Hotel-1-v3.jpg?ixlib=php-3.2.0&s=d38c7b6d4741c97626ce5b24fc99d54d',
      name: 'Hotel9'
    }
  ];

  return (
    <div className="container">
      <header className={styles.searchLogo}>
        <img
          src="https://media.discordapp.net/attachments/713803790746124338/713927966576607232/Screen_Shot_2020-05-23_at_6.34.26_PM.png"
          alt=""
          style={{ height: '100px' }}
        />
        <div className={styles.buttonDiv}>
          <button
            type="button"
            class="btn btn-link"
            style={{
              color: '#0074A3',
              width: '35%',
              display: 'inline-block'
            }}
          >
            Sign Up
          </button>
          <button
            type="button"
            class={`btn btn-primary ${styles.loginButton} shadow`}
          >
            Login
          </button>
        </div>
      </header>
      <h3 className={styles.searchResult}>
        {' '}
        <span style={{ color: '#0074A3' }}> 82 results </span> in Riverside, CA
      </h3>
      <SearchList arrOfHotels={arrOfHotels} />
    </div>
  );
};
