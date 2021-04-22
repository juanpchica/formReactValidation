import React, { useState } from "react";
import Form from "./components/Form";
import Message from "./components/Message";

function App() {
  const [data, setData] = useState({ name: "", email: "", phone: "", url: "" });
  const [message, setMessage] = useState({ show: false, msg: "", type: "" });

  const showMessage = (show = false, msg = "", type = "") => {
    setMessage({ show, msg, type });
  };

  const inputCheck = (name, value) => {
    let result = false;
    const letters = /^[A-Za-z]+$/;
    const numbers = /^[0-9]+$/;
    const mailformat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const urlBlogFormat = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

    switch (name) {
      case "name":
        if ((value >= 3 && value <= 30) || !value.match(letters)) {
          result = true;
        } else {
          result = false;
        }
        break;
      case "phone":
        if (!value.match(numbers)) {
          result = true;
        } else {
          result = false;
        }
        break;
      case "email":
        if (!value.match(mailformat)) {
          result = true;
        } else {
          result = false;
        }
        break;
      case "url":
        if (!value.match(urlBlogFormat)) {
          result = true;
        } else {
          result = false;
        }
        break;
    }

    return result;
  };

  const verifyData = (e) => {
    e.preventDefault();
    if (
      !inputCheck("name", data.name) &&
      !inputCheck("phone", data.phone) &&
      !inputCheck("email", data.email) &&
      !inputCheck("url", data.url)
    ) {
      showMessage(true, "Form is Complete!", "success");
    } else {
      showMessage(true, "Form is Incomplete!", "warning");
    }
  };

  return (
    <div className="grid-container fluid">
      <Form data={data} setData={setData} verifyData={verifyData}></Form>
      {message.show && <Message action={message} removeMessage={showMessage} />}
    </div>
  );
}

export default App;
