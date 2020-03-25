import React from "react";

export default function Button(props) {
  return (
    <button
      type="button"
      id={props.id}
      style={{ visibility: props.visibility }}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}
