import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
        <Header />
        <div className="container is-widescreen">
          <div className="columns container is-fluid">
            <div className="column is-half column-left has-text-centered">
              <h1 className="title">MARKDOWN</h1>
              <form className="form">
                <div className="field">
                  <div className="control">
                    <textarea
                      id="editor"
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
              <h1 className="title">HTML</h1>
              <div
                id="preview"
                className="box markdown-output"
                dangerouslySetInnerHTML={{ __html: marked(input), sanitize: true }}
              />
            </div>
          </div>
        </div>
        <Footer />

      </div>
    );
  }
}

export default App;
