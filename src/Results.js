import React from "react";
import Meaning from "./Meaning";
import "./App.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results mt-3">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
