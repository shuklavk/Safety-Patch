import React from 'react';

const Admin = ({ agencyRespondents, approveRequest }) => {
  // pass down a list of respondent objects that have open requests for the agency
  // since we have an endpoint for finding all respondents of an agency
  // we can use that data
  // I have a component called request, we may track the requests made (but since the model
  // does not exist, let's hack and just use respondent adddress
  return (
    <div>
      <h1>Requests</h1>
      {agencyRespondents.map((respondent) => {
        return (
          <div key={respondent.id} style={{ display: 'flex' }}>
            <h4>{`${respondent.firstName} ${respondent.lastName}`}</h4>
            <div>{respondent.address}</div>
            <div>{respondent.verified}</div>
            {respondent.verified
              ? <button onClick={approveRequest}>Approve</button>
              : <button disabled>Approve</button>}
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Admin;