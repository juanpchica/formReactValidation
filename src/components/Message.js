import React, { useEffect } from "react";

const Message = (props) => {
  const { msg, type } = props.action;
  const removeMessage = props.removeMessage;

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeMessage();
    }, 3000);

    return () => clearTimeout(timeout);
  });

  return (
    <div className={"callout " + type} role="alert">
      {msg}
    </div>
  );
};

export default Message;
