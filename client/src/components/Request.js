import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Request extends React.Component {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: null,
  }

  render () {
    return (
      <div>
        <h1>Request a quarantine stay</h1>
        <p>This request will be reviewed by your organization.</p>
        <Form>
          <Form.Group>
            <Form.Label>DATE</Form.Label>
            <div>
              <DateRangePicker
                startDateId="startDate"
                endDateId="endDate"
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
                focusedInput={this.state.focusedInput}
                onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
              />
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>LOCATION (CITY, STATE, ZIP CODE)</Form.Label>
            <Form.Control type="text" value={this.state.value} onChange={this.handleChange} name="location" />
          </Form.Group>
          <Button variant="primary" onClick={this.handleSubmit}>Submit for review</Button>
        </Form>
      </div>
    );
  }
};

export default Request;