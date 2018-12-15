import React from 'react';

function EditPageFooter({ handleSubmit }) {
  return (
    <div>
      <div className='edit-page-footer'>
        <div className='edit-page-footer-changes'>
          <a onClick={() => this.props.history.push(`/users/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}`)}>Discard changes</a>
          <button onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default EditPageFooter;
