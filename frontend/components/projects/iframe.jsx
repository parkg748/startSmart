import React from 'react';
import PropTypes from 'prop-types'

class IFrame extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        height: 0
      };
    }
    /**
     * Called after mounting the component. Triggers initial update of
     * the iframe
     */
    componentDidMount() {
        this._updateIframe();
        setTimeout(() => this._updateIframe(), 300);
        this.refs.iframe.contentWindow.document.documentElement.addEventListener('load', () => {
          console.log('loaded');
          this._updateIframe();
        });
    }

    /**
     * Called each time the props changes. Triggers an update of the iframe to
     * pass the new content
     */
    componentDidUpdate() {
        this._updateIframe();
    }
    _updateIframe() {
        const iframe = this.refs.iframe;
        const document = iframe.contentDocument;
        const head = document.getElementsByTagName('head')[0];
        const iframeHeight = iframe.contentWindow.document.documentElement.scrollHeight;
        if (iframeHeight != this.state.height) {
          this.setState({height: iframeHeight});
        }
        console.log(this.state.height);
        // iframe.contentWindow.body.documentElement.scrollHeight;
        document.body.innerHTML = this.props.content;
        this.props.stylesheets.forEach(url => {
            const ref = document.createElement('link');
            ref.rel = 'stylesheet';
            ref.type = 'text/css';
            ref.href = url;
            head.appendChild(ref);
        });
    }

    /**
     * This component renders just and iframe
     */
    render() {
        return <iframe scrolling="no" style={{height: `${this.state.height}px`}} ref="iframe"/>
    }
}

export default IFrame;
