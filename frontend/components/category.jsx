import React from 'react';

class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.category.name}</h1>
        <p>{this.props.category.description}</p>
      </div>
    );
  }
}
