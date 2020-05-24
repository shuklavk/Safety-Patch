import React, { useState } from 'react';
import styles from './RespondentCard.module.css';
import Button from 'react-bootstrap/Button';
import { MDBIcon } from 'mdbreact';

export default ({ resp }) => {
  const [verified, setVerified] = useState(false);
  const name = resp.firstName + resp.lastName;
  const phoneNumber =
    '(' +
    resp.primaryPhoneNumber.toString().slice(0, 3) +
    ') ' +
    resp.primaryPhoneNumber.toString().slice(3, 6) +
    '-' +
    resp.primaryPhoneNumber.toString().slice(6);
  const email = resp.email;
  const location = resp.address + ' ' + resp.city + ', ' + resp.state;
  // const verified = true;

  const veri = verified ? (
    <p style={{ color: '#51E656' }}>
      <i className="fas fa-check-circle fa-3x"></i>
    </p>
  ) : (
    <p></p>
  );
  return (
    <div>
      <div
        className={`card ${styles.main}`}
        style={{
          width: '30rem',
          height: '14rem',
          textAlign: 'center',
          margin: '30px',
          // padding
          borderRadius: '20px',
          backgroundColor: '#D2E5EC',
          margin: '15px auto 25px',
          float: 'none'
        }}
      >
        <div className="card-body">
          <h4 className="card-title" style={{ color: '#157CA9' }}>
            {name}
          </h4>
          <h6>{location}</h6>
          <p className="card-text">{`Phone Number: ${phoneNumber}`}</p>
          <p className="card-text">{`Email: ${email}`}</p>
          <Button
            variant="primary"
            onClick={() => {
              setVerified(!verified);
            }}
            type="submit"
            className={styles.registerButton}
          >
            Verify
          </Button>
        </div>
        <div className={styles.topRight}>{veri}</div>
      </div>
    </div>
  );
};
