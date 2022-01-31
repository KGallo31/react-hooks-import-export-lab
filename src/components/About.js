import React from "react";
import {image} from '/Users/kg/Development/code/phase-2/react-hooks-import-export-lab/src/data/user'

export default function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}
