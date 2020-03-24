import React from "react";

export default function Button(props) {
  return (
    <button
      type="button"
      style={{ visibility: props.visibility }}
      onClick={props.onClick}
      id={props.id}
    >
      {props.title}
    </button>
  );
}
