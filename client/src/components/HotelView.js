import React from 'react';
import styles from './HotelView.module.css';

const HotelView = (props) => {
  return (
    <div>
      <div>
        <h1>Provide accomodations for front line heroes</h1>
        <p>You can make an impact to the safety of our community by providing accommodation to healthcare and frontline workers.</p>
        <p>Sign up your hotel to provide safe asylum to our heroes. They work in close proximity to those at risk of COVID-19 and they want to protect their families and loves ones by quarantining.</p>
        <p>Here is how it works:</p>
        <ul>
          <li>Send us an email to <a href = "mailto: hotels@safetypatch.com">hotels@safetypatch.com</a> with the contact information of the responsible person</li>
          <li>Provide a PROMO CODE that frontline organizations can use at the time of booking on your website</li>
          <li>We'll list your hotel in our directory, which is available exclusively to managers at frontline organizations</li>
          <li>Organizations will do internal ID verification using our system to check bookers are legitimate</li>
          <li>Include terms and conditions to the promo, your discount rate, and restrictions if any</li>
          <li>You should also conduct guest's ID verification at check-in, and have the right to deny if ID can't be verified</li>
        </ul>
        <p>Safety Patch is committed to provide this platform as an in-kind contribution to COVID-19 impacted communities. We want to help our community heroes to rest with peace of mind, and save them valuable financial resources with special rates.</p>
      </div>
    </div>
  );
};

export default HotelView;