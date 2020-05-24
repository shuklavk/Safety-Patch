import React from 'react';
import styles from './SearchCard.module.css';

export default ({ img, name }) => {
  return (
    <div style={{ textAlign: 'center' }}>
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
        </div>
      </div>
      <h5>{name}</h5>
    </div>
  );
};
