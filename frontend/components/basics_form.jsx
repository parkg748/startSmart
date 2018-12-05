import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker } from 'react-dates';

class BasicsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      focused: false
    };
    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDateChange(date) {
    this.setState({date});
  }

  onFocusChange(focused) {
    this.setState({focused});
  }

  render() {
    return (
      <SingleDatePicker
    id="date_input"
    date={this.state.date}
    focused={this.state.focused}
    onDateChange={this.onDateChange}
    onFocusChange={this.onFocusChange}
/>
    );
  }
}

export default BasicsForm;
