import React, { useState } from 'react';
import './App.css';

/* Import SVG */
import copy from './assets/icon-copy.svg';
/* import check from './assets/icon-check.svg';
import rightArrow from './assets/icon-arrow-right.svg'; */

function App() {
  const [characterLenght, setCharacterLenght] = useState(0)
  const [passwordPreview, setPasswordPreview] = useState("Input")

  return (
    <div className="App">
      <div className='title'>{/* Title */}
        <span>Password-Inator</span>
      </div>
      <div className='preview'>{/* Preview */}
        <span className='passwordPreview'>{passwordPreview}</span>
        <div>
          <span></span>
          <span>{copy}</span>
        </div>
      </div>
      <div className='setting'>{/* Setting */}
        <div className='characterLenght'>
          <div className='characterLenghtTitle'>
            <span>Character Lenght</span>
            <span>{characterLenght}</span>
          </div>
          <div><input type="range" name="characterLenght" id="characterLenght" /></div>
        </div>
        <div>checkbox</div>
        <div>indicator</div>
        <div>button</div>
      </div>
    </div>
  );
}

export default App;
