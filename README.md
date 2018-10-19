# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

# StartSmart
![alt text](https://i.imgur.com/YuU5VqC.jpg)
[Live Demo](https://start-smart.herokuapp.com/#/)

StartSmart is a clone of Kickstarter, a crowdfunding website where users can create projects, pledge funds to other projects, receive rewards, and utilize this platform to expose their creative ideas to the world.

Users can advertise a project idea with a personalized description of the project's backstory and the value it offers to the public. Users can also offer support to other users' projects and receive rewards, after the end of the project's term, based according to the donation amounts. Funds are not released to projects that fall below the pledge goal amount and vice versa. This model helps to prevent users from utilizing this platform for profitability and scams.

# Technologies Used

The backend portion of StartSmart is built fully on the Ruby on Rails framework and the front-end portion utilizes the React\Redux framework. Data is collected via Postgresql. User authentication consists of BCrypt for password salting and hashing and SecureRandom password for generating a password digest to ensure protection of the users from possible attackers.

```js
  self.password_digest = BCrypt::Password.create(password)
```

The frontend data is controlled by a single frontend store using the Redux framework. As user creates new session or new project, or edits his/her session and/or projects, or deletes his/her session and/or projects, the action part of the framework dispatches the correct action in order to execute the users' expected results...

```js
const receiveAllProjects = projects => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});

const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

const removeProject = project => ({
  type: REMOVE_PROJECT,
  projectId: project.id
});

export const fetchProjects = () => dispatch => (
  ProjectApiUtil.fetchProjects().then(projects => dispatch(receiveAllProjects(projects)))
);

export const fetchProject = (user, projectForm) => dispatch => {
  return ProjectApiUtil.fetchProject(user, projectForm).then(project => dispatch(receiveProject(project)))
};

export const fetchProjectsByCategory = category => dispatch => (
  ProjectApiUtil.fetchProjectsByCategory(category).then(projects => dispatch(receiveAllProjects(projects)))
);

export const createProject = (user, data) => dispatch => (
  ProjectApiUtil.createProject(user, data).then(project => dispatch(receiveProject(project)))
);

export const updateProject = projectForm => dispatch => (
  ProjectApiUtil.updateProject(projectForm).then(project => dispatch(receiveProject(project)))
);

export const deleteProject = projectForm => dispatch => (
  ProjectApiUtil.deleteProject(projectForm).then(project => dispatch(removeProject(project)))
);
```
...and then captures the user input and parses it to a state particular to the users' requests.

```js
export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      return merge({}, state, action.project);
    case REMOVE_PROJECT:
      return {};
    default:
      return state;
  }
};
```

State is then passed to the props that are then rendered in the HTML portion of the webpage.

```js
const mapStateToProps = state => {
  return {
    user: state.entities.users,
    project: state.entities.project,
    category: state.entities.category
  };
};
```

The benefit of sending data to a single entity and then disseminating the data to various components reduces instances of conflicting datas amongst those components and keeps the code more dry.

The React portion of this project focuses entirely on passing its props to its children component.

```js
render() {
  if (this.props.user.currentUser === null) return <Redirect to='/login' />;
  let profile = undefined;
  let navbarWidth = '';
  if (this.props.user != null && Object.values(this.props.user)[0] != null) {
    profile = <div className='profile-circle'><button onClick={() => this.clickProfileIcon()}><img src="https://img.wonderhowto.com/img/56/01/63456484792752/0/make-pixel-art-minecraft.w1456.jpg"></img></button></div>;
    navbarWidth = 'navbar-width';
  } else {
    profile = <Link to='/login' className='login'>Sign in</Link>;
  }
  return (
    <nav>
      <section className='explore-project'>
        <Link to='/explore' className='explore'>Explore</Link>
        <Link to='/learn' className='project'>Start a project</Link>
      </section>
      <Link to='/'><img className='logo' src='https://i.imgur.com/YuU5VqC.jpg' /></Link>
      <section className={`search-signin ${navbarWidth}`}>
        <Link to='/search' className='search'>Search<i className="fas fa-search"></i></Link>
        {profile}
      </section>
    </nav>
  );
}
```

, Webpack for bundling, and Active Storage for photo uploading.

# Features

User Auth
Once a user attempts to request an invalid signup/login form, users are notified via a popup message, stating directly the correct format needed to be inputted. Error messages are passed as arrays and rendered in a container above the signup form. Once the correct signup format is finally submitted, the errors array clears itself for the next user and redirected to a recommendation page that is rendered based on the users' history favorites.

```js
handleSubmit(e) {
  e.preventDefault();
  if (!this.state.email.includes('@') || !this.state.reemail.includes('@')) {
    this.setState({emailError: 'error-email-msg-show'});
    window.setTimeout(() => this.setState({emailError: 'error-email-msg'}), 5000);
  } else if ((this.state.email === this.state.reemail) && (this.state.password === this.state.repassword)) {
    this.props.clearErrors(this.props.errors);
    this.props.signup({name: this.state.name, email: this.state.email, password: this.state.password}).then(() => this.props.history.push('/recommendations'));
  }
}
```

In order to prevent a page reload from kicking out a user from his/her session, an HTML code in the root HTML file prevents such matters from persisting.

```js
<% if logged_in? %>
<script type='text/javascript'>
  window.currentUser = <%= render(
    'api/users/user.json.jbuilder',
    user: current_user
  ).html_safe %>
</script>
<% end %>

<main id='root'></main>
```
