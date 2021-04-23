import React from "react";

const Form = ({ data, setData, verifyData }) => {
  return (
    <div className="row">
      <h1 className="text-center">Form Validation</h1>
      <form onSubmit={verifyData}>
        <div className="medium-12 cell">
          <label>
            Name:
            <input
              type="text"
              placeholder="Name: "
              value={data.name}
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
            />
          </label>
        </div>
        <div className="medium-12 cell">
          <label>
            Email:
            <input
              type="text"
              placeholder="Email:"
              value={data.email}
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            />
          </label>
        </div>
        <div className="medium-12 cell">
          <label>
            Phone:
            <input
              type="text"
              placeholder="Phone:"
              value={data.phone}
              onChange={(e) => {
                setData({ ...data, phone: e.target.value });
              }}
            />
          </label>
        </div>
        <div className="medium-12 cell">
          <label>
            Blog Urls (https://www.google.com):
            <input
              type="text"
              placeholder="Blog Url:"
              value={data.url}
              onChange={(e) => {
                setData({ ...data, url: e.target.value });
              }}
            />
          </label>
        </div>

        <div className="small-6 small-centered text-center columns">
          <button
            className="button success expand round text-center"
            type="submit"
          >
            Verify
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
