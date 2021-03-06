import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Modal from '../modal';
import MyStuffNav from './mystuff_nav';
import SearchBar from '../search_bar';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.class;
    this.clickSearchBar = this.clickSearchBar.bind(this);
  }

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchUser(getState().session.id);
  }

  clickSearchBar() {
    if (this.state.searchBar === 'search-bar-close') {
      this.setState({searchBar: ''});
    } else {
      this.setState({searchBar: 'search-bar-close'});
    }
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout().then(() => {this.props.history.push(`/login`), this.setState({displayProfileMenu: 'js-modal-close'})});
  }

  changeProjectPage(idx) {
    this.props.history.push(`/users/${getState().session.id.id}/projects/${idx}`);
    window.location.reload();
  }

  clickProfileIcon() {
    if (this.state.displayProfileMenu === 'js-modal-close') {
      this.setState({displayProfileMenu: ''});
    } else {
      this.setState({displayProfileMenu: 'js-modal-close'});
    }
  }

  render() {
    if (this.props.user.currentUser === null) return <Redirect to='/login' />;
    let profile = undefined;
    let navbarWidth = '';
    if (this.props.user != null && Object.values(this.props.user)[0] != null) {
      profile = <div className='profile-circle'><button onClick={() => this.clickProfileIcon()}><img src={Object.values(getState().entities.users)[0].profileUrl === '' ? 'https://i.imgur.com/jyZdRza.png' : Object.values(getState().entities.users)[0].profileUrl} /></button></div>;
      navbarWidth = 'navbar-width';
    } else {
      profile = <Link to='/login' className='login'>Sign in</Link>;
    }
    let currentUserProjects = [];
    if (Object.values(getState().entities.users)[0].projects != null) {
      Object.values(getState().entities.users)[0].projects.forEach(project => {
        if (project.user_id === getState().session.id.id) {
          currentUserProjects.push(project);
        };
      });
    }
    return (
      <div>
        <SearchBar searchBar={this.state.searchBar} clickSearchBar={() => this.clickSearchBar()}/>
        <MyStuffNav navbarWidth={navbarWidth} profile={profile} clickSearchBar={() => this.clickSearchBar()}/>
        <Modal displayProfileMenu={this.state.displayProfileMenu} user={Object.values(this.props.user)[0]} userId={getState().session.id} sessionId={getState().session.id} logoutUser={(e) => this.logoutUser(e)}/>
        <div className='messages-inbox'>
          <div className='messages-inbox-one'>
            <div className='messages-inbox-two'>
              <div className='messages-inbox-header'>
                <div className='messages-inbox-header-one'>
                  <h2>Messages</h2>
                </div>
              </div>
              <div className='messages-inbox-header-content'>
                <div className='messages-inbox-three'>
                  <p>Note: We do not endorse third-party services. Please report spam messages or unsolicited offers.</p>
                </div>
              </div>
            </div>
            <div className='messages-inbox-four'>
              <div className='messages-inbox-five'>
                <div className='messages-inbox-six'>
                  <div className='messages-inbox-seven'>
                    <div className='messages-search-messages'>
                      <i className="messages-search-icon fas fa-search"></i>
                      <input type='text' placeholder='Search messages'/>
                    </div>
                    <div className='messages-dropdpown'>
                      <div className='messages-dropdown-one'>
                        <i className="messages-dropdown-caret fas fa-caret-down"></i>
                        <select className='messages-dropdown-select' defaultValue='inbox'>
                          <option defaultValue='inbox'>Inbox</option>
                          <option defaultValue='sent'>Sent</option>
                          <option defaultValue='unread'>Unread</option>
                          <option defaultValue='archive'>Archive</option>
                          <option defaultValue='all'>All</option>
                          <option defaultValue='spam'>Spam</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='messages-inbox-eight'>
                <div className='messages-inbox-nine'>
                  <div className='messages-inbox-ten'>
                    <div className='messages-inbox-eleven'>
                      <p>Nothing to see here.</p>
                      <img src='https://d3mlfyygrfdi2i.cloudfront.net/world-500px.gif'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Messages;
