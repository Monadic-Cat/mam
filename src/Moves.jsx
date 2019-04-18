import React, { useState } from 'react';
import Markdown from 'react-markdown';
import ClipboardJS from 'clipboard';
import moves, { moveString } from './moves';
import './moves.scss';

function Move({move}) {
   let name = move.name;
   let body = move.body;
   
   let [folded, setFolded] = useState(true);
   
   return (
      <div className="move" onClick={() => setFolded(!folded)}>
        <span className="moveHead">{name}</span>
          <input className="clipboardButton"
                 type="button"
                 value="Copy"
                 data-clipboard-text={moveString(move)}
                 onClick={(e) => e.stopPropagation()}/>
        <Markdown className="moveBody">
          {!folded ? body:""}
        </Markdown>
      </div>
   );
}

function Moves() {
   let clipboard = new ClipboardJS('.clipboardButton');
   return (
      <div>
        {moves.map(x => <Move move={x}/>)}
      </div>
   );
}

export default Moves;
