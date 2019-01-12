import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const marked = require("marked");

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  var link = marked.Renderer.prototype.link.call(this, href, title, text);
  return link.replace("<a", "<a target='_blank' ");
};

marked.setOptions({
  gfm: true,
  highlight: false,
  tables: false,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  langPrefix: false,
  renderer: renderer
});

const initialText = `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
\`const marked = require("marked"); // inline code\`
\`\`\`
// code block
function add(a, b) {
  return a + b;
}
\`\`\`
**bolded text**
_italic_
> Block Quotes
+ List item
[Bulma.css](https://bulma.io/)
![React Logo Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png)`;

class App extends Component {
  state = {
    input: initialText
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
                dangerouslySetInnerHTML={{ __html: marked(input), sanitize: true}}
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
