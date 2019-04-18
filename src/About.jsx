import React, { useState } from 'react';
import Markdown from 'react-markdown';
import about from './about.md';

function About() {
   let [text, setText] = useState("Loading");
   if(text === "Loading") {
      fetch(about)
         .then(response => response.text())
         .then(text => setText(text));
   }

   return <Markdown source={text}/>;
}

export default About;
