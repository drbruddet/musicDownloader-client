import React from 'react'
import ReactDOM from 'react-dom'

export default class App extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
        const url =  ReactDOM.findDOMNode(this.refs.urlInput).value.trim();
        if (typeof window !== 'undefined' && url) {
           window.location.href = "http://127.0.0.1:2000/" + "?url=" + url;
        }
        ReactDOM.findDOMNode(this.refs.urlInput).value = '';
    }

    render() {
        return (
            <div>
                <h1>MAIN APP PAGE</h1>
                <form onSubmit={this.handleSubmit.bind(this)} >
                    <input
                        type="text"
                        ref="urlInput"
                        placeholder="Youtube Url ..."
                    />
                    <button type="submit" value="Submit">
                        Download
                    </button>
                </form>
            </div>
        )
    }
}
