import React from "react";

const Message = ({ text = "Realiza una búsqueda para ver productos" }) => {
  return (
    <div>
      <h2>{text}</h2>
    </div>
  );
};

export default Message;
