import React from 'react';
import '../../app/assets/stylesheets/clearbrain.css';

class ClearBrain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [],
      grocery: ''
    };
  }

  update(field) {
    return (e) => this.setState({[field]: this.state.groceries.push(e.target.value)});
  }

  render() {

    return (
      <div clasName='main'>
        <div className='grocery-container'>
          <h1>Groceries</h1>
          <ul>
            {this.state.groceries.map(grocery => <li>{grocery}</li>)};
          </ul>
          <textarea placeholder='Enter a title for this card...'></textarea>
          <button onClick={(e) => this.update('groceries')}>+ Add Card...</button>
        </div>
      </div>
    );
  }
}

export default ClearBrain;
