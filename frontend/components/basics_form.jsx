import React from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';
import 'react-calendar/dist/Calendar.css';
import '../../app/assets/stylesheets/reactcalendar.css';

class BasicsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(date) {
    this.setState({ date });
  }

  render() {
    return (
      <Calendar onChange={this.onChange} value={this.state.date} />
    );
  }
}

export default BasicsForm;
