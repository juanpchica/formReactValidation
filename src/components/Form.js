import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="row">
        <h1 className="text-center">Form Validation</h1>
        <form>
          <label>
            Name:
            <input type="text" placeholder=".medium-6.cell" />
          </label>
          <h3>Email:</h3>
          <h3>Phone:</h3>
          <h3>Blog URL:</h3>
          <div className="small-6 small-centered text-center columns">
            <a href="#" className="button success expand round text-center">
              Verify
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
