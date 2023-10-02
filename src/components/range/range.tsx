import React from 'react'

/* import component style */
import './range.css'


const range = () => {
    return (
        <div className='range'>
            <div>
                <span>Character Lenght</span>
                <span>10</span>
            </div>
            <label htmlFor="">
                <input type="range" min={5} max={50} />
            </label>
        </div>
    )
}

export default range
