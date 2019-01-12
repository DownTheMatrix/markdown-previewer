import React from "react";

const Header = () => {
  return (
    <header className="header section has-background-primary ">
      <div className="container has-text-centered">
        <h1 className="title header-heading">Markdown Previewer</h1>
        <h2 className="subtitle header-subheading">
          Enter your text using the markdown syntax and see the result!
        </h2>
      </div>
    </header>
  );
};

export default Header;
