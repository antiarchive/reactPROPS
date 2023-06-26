import React from "react";

function Contact(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.photo} alt={"photo of " + props.name}></img>
      <p>{props.number}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Contact;
