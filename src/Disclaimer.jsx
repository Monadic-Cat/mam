import React, { useState } from 'react';
import Markdown from 'react-markdown';
import disclaimer from './disclaimer.txt';

function Disclaimer() {
   let [text, setText] = useState("Loading");
   if(text === "Loading") {
      fetch(disclaimer)
         .then(response => response.text())
         .then(text => setText(text));
   }
   
   return (
      <pre>
        {text}
      </pre>
   );
}

export default Disclaimer;
