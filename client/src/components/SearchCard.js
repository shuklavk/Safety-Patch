import React from 'react';
import styles from './SearchCard.module.css';

export default ({ img, name }) => {
  return (
    <div>
      <div
        className="card"
        style={{
          width: '20rem',
          height: '210px',
          borderRadius: '43px',
          margin: '20px'
        }}
      >
        <div>
          <img
            className="card-img-top"
            src={img}
            alt="Card image cap"
            style={{ borderRadius: '43px', height: '210px' }}
          />
          <div className={styles.topLeft}>{name} </div>
        </div>
      </div>
    </div>
  );
};
