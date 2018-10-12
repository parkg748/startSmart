import React from 'react';

class Recommendations extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger;
    this.props.fetchCategories();
  }

  render() {
  }
}

export default Recommendations;
