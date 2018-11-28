/**
 * React component which renders the given content into an iframe.
 * Additionally an array of stylesheet urls can be passed. They will
 * also be loaded into the iframe.
 */
class ExampleContainer extends React.Component {

    static propTypes = {
        content: React.PropTypes.string.isRequired,
        stylesheets: React.PropTypes.arrayOf(React.PropTypes.string),
    };

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

    /**
     * Updates the iframes content and inserts stylesheets.
     * TODO: Currently stylesheets are just added for proof of concept. Implement
     * and algorithm which updates the stylesheets properly.
     */
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
        return <iframe ref="iframe"/>
    }
}

/**
 * Exmaple App to demonstrate the ExampleContainer component
 */
class App extends React.Component {

    constructor(...args) {
        super(...args);
    }

    /**
     * State contains demo data
     */
    state = {
        content: `<h1>Title</h1><button class="btn btn-primary">Test</button>`,
        styles: [
            'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'
        ]
    };

    /**
     * Set a new state with an increased counter
     */


    /**
     * Renders demo app
     *
     * The Example containers content will be concatenated from an html string
     * and the counter value. This is just to test updating of the iframe
     */
    render() {
        const {content, styles} = this.state;

        return (
            <div>
                <ExampleContainer content={content} stylesheets={styles} />
            </div>
        );
    }
}

// Render the app
ReactDOM.render(<App/>, document.body);
