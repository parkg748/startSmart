// import React from 'react';
// import {Link} from 'react-router-dom';
//
// class HomepageCategories extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'Food & Craft'
//     };
//     // this.clickHandler = this.clickHandler.bind(this);
//   }
//
//   // componentDidMount() {
//   //   this.props.fetchProjectsByCategory(this.props.selectProjectsFromCategory(this.state.name));
//   // }
//   //
//   // clickHandler(name) {
//   //   this.setState({ name });
//   //   this.props.fetchProjectsByCategory(this.props.selectProjectsFromCategory(name));//.then(() => this.sele)
//   // }
//
//   convertNameToUrl(name) {
//     let array = name.split(' ');
//     if (array.length === 3) {
//       array = array.slice(0, 1).concat(array.slice(2));
//       return array.join('-');
//     }
//     return array[0];
//   }
//
//   render() {
//     return (
//       <div className='homepage-categories-container'>
//         <ul>
//           <li onClick={() => this.clickHandler('Food & Craft')}>Food & Craft</li>
//           <li onClick={() => this.clickHandler('Music')}>Music</li>
//           <li onClick={() => this.clickHandler('Comics & Illustration')}>Comics & Illustration</li>
//           <li onClick={() => this.clickHandler('Film')}>Film</li>
//           <li onClick={() => this.clickHandler('Arts')}>Arts</li>
//           <li onClick={() => this.clickHandler('Design & Tech')}>Design & Tech</li>
//           <li onClick={() => this.clickHandler('Publishing')}>Publishing</li>
//           <li onClick={() => this.clickHandler('Games')}>Games</li>
//         </ul>
//         <section>
//           <h1>{this.state.name}</h1>
//           <Link to={`/${this.convertNameToUrl(this.state.name)}`}>VIEW ALL</Link>
//           <h1>FEATURED PROJECT</h1>
//           <section>
//           </section>
//         </section>
//         <section>
//           <ul>
//             <li>NEW & NOTEWORTHY</li>
//             <li>ALMOST THERE</li>
//             <li>POPULAR</li>
//           </ul>
//         </section>
//       </div>
//     );
//   }
// }
//
// export default HomepageCategories;
