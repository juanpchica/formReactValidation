import React, { useState } from "react";
import Form from "./components/Form";
import Message from "./components/Message";

function App() {
  const [data, setData] = useState({ name: "", email: "", phone: "", url: "" });
  const [message, setMessage] = useState({ show: false, msg: "fw", type: "" });

  const showMessage = (show = false, msg = "", type = "") => {
    setMessage({ show, msg, type });
  };

  const inputCheck = (name, value) => {
    let result = false;
    const letters = /^[A-Za-z]+$/;
    const numbers = /^[0-9]+$/;
    const mailformat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

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
    }

    return result;
  };

  const verifyData = (e) => {
    e.preventDefault();
    if (
      !inputCheck("name", data.name) &&
      !inputCheck("phone", data.phone) &&
      !inputCheck("email", data.email)
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
