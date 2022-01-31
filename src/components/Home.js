import React from "react";
import {username,city} from '/Users/kg/Development/code/phase-2/react-hooks-import-export-lab/src/data/user'



export default function Home() {
  console.log(city)
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}
