import React from 'react';
import {Link} from 'react-router-dom';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let profile = undefined;
    if (this.props.user != null) {
      profile = <div className='profile-circle'><button><img src="https://img.wonderhowto.com/img/56/01/63456484792752/0/make-pixel-art-minecraft.w1456.jpg"></img></button></div>;
    } else {
      profile = <Link to='/login' className='login'>Sign in</Link>;
    }
    return (
      <div>
        <nav>
          <section className='explore-project'>
            <Link to='/explore' className='explore'>Explore</Link>
            <Link to='/learn' className='project'>Start a project</Link>
          </section>
          <Link to='/'><img className='logo' src='https://i.imgur.com/YuU5VqC.jpg' /></Link>
          <section className='search-signin'>
            <Link to='/search' className='search'>Search<i className="fas fa-search"></i></Link>
            {profile}
          </section>
        </nav>
        <div className='step-three-top'>
          <div className='page-3'>3 of 3</div>
        </div>
        <div className='step-three-box'>
          <div className='step-three-box-inner'>
            <div className='step-three-box-inner-inner'>
              <h2>Finally, let's confirm your eligibility.</h2>
              <h3>Tell us where you're based and confirm a few other details before we proceed.</h3>
              <div className='country-dropdown'>
                <i className="fas fa-caret-down"></i>
                <select className='select-your-category' defaultValue='your-category'>
                  <option value='your-category' disabled>Select your category</option>
                  debugger;
                  {Object.values(getState().entities.category).map(obj => {if (obj.name === 'Film') {
                    return <option key={obj.id} value={obj.name}>Film & Video</option>
                  } else {
                    return <option key={obj.id} value={obj.name}>{obj.name}</option>
                  }})}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
