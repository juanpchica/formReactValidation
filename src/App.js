import React, { useState } from "react";
import Form from "./components/Form";
import Message from "./components/Message";

function App() {
  const [data, setData] = useState({ name: "", email: "", phone: "", url: "" });
  const [txt, setTxt] = useState("Form is Incomplete");
  const verifyData = (e) => {
    e.preventDefault();
    if (!inputCheck("name", data.name)) {
      setTxt("Form is Complete");
    } else {
      setTxt("Form is Incomplete");
    }
  };

  const inputCheck = (name, value) => {
    let result = false;
    const letters = /^[A-Za-z]+$/;
    switch (name) {
      case "name":
        if ((value >= 3 && value <= 30) || !value.match(letters)) {
          result = true;
        } else {
          result = false;
        }
        break;
    }

    return result;
  };

  return (
    <div>
      <Form data={data} setData={setData} verifyData={verifyData}></Form>
      <Message txt={txt}></Message>
    </div>
  );
}

export default App;
