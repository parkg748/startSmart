import React from 'react';
import ReactQuill from 'react-quill';

class Editor extends React.Component {
  constructor (props) {
    super(props)
    this.state = { editor_html: '', theme: 'snow' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (html) {
  	this.setState({ editor_html: html });
    this.props.updateEditorHtml(html);
  }

  handleThemeChange (newTheme) {
    if (newTheme === "core") newTheme = null;
    this.setState({ theme: newTheme });
  }

  render () {
    return (
      <div>
        <ReactQuill
          theme={this.state.theme}
          onChange={this.handleChange}
          value={this.props.editorHtml}
          modules={Editor.modules}
          formats={Editor.formats}
          bounds={'.app'}
          placeholder={this.props.placeholder}
         />
       </div>
     )
  }
}

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
  toolbar: [
    ['bold', 'italic'],
    [{'header': '2'}],
    [{'list': 'bullet'}],
    ['link', 'video', 'image']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

/*
 * PropType validation
 */
// Editor.propTypes = {
//   placeholder: PropTypes.string,
// }

export default Editor;
