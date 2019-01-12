import React, { Component } from "react";
import "./App.css";
import { Form } from "react-bulma-components/full";
import { Button } from "react-bulma-components/full";

const marked = require("marked");

class App extends Component {
  state = {
    input: ""
  };

  renderMarkdown = input => {
    this.setState({
      input: input
    });
  };

  render() {
    const { input } = this.state;

    return (
      <div className="app">

        {/* Header */}
        <header className="header section has-background-primary">
          <div className="container has-text-centered">
            <h1 className="title">Markdown Previewer</h1>
            <h2 className="subtitle">
              Enter your text using the markdown syntax and see the result!
            </h2>
          </div>
        </header>

        {/* Main */}
        <div className="container is-widescreen">
          <div className="columns container is-fluid">
            <div className="column is-half column-left has-text-centered">
              <h1 className="title">Markdown</h1>

              {/* Form */}
              <form className="form">
                <div className="field">
                  <div className="control">
                    <textarea
                      className="textarea markdown-input"
                      rows="10"
                      placeholder="Enter your markdown here"
                      value={input}
                      onChange={e => this.renderMarkdown(e.target.value)}
                    />
                  </div>
                </div>
              </form>

            </div>

            <div className="column is-half column-right has-text-centered">
              <h1 className="title">Text</h1>
              <div
                className="box markdown-output"
                dangerouslySetInnerHTML={{ __html: marked(input)}}
              />
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="footer has-background-info has-text-white is-small">
          <div className="content has-text-centered">
            <p>Made by <a className="footer-link" href="https://github.com/DownTheMatrix" target="_blank" rel="noopener noreferrer">Bruno Mazza</a></p>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
