import React from 'react';
import PropTypes from 'prop-types'

class IFrame extends React.Component {

    /**
     * Called after mounting the component. Triggers initial update of
     * the iframe
     */
    componentDidMount() {
        this._updateIframe();
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
        return <iframe scrolling="no" ref="iframe"/>
    }
}

export default IFrame;
