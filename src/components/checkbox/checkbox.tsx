import React from 'react'

/* import component style */
import './checkbox.css'


const checkbox = () => {
    return (
        <div className='checkboxContainer'>
            <label htmlFor="">
                <input type="checkbox" name="" id="" />
                Include Uppercase Letters
            </label>
            <label htmlFor="">
                <input type="checkbox" name="" id="" />
                Include Lowercase Letters
            </label>
            <label htmlFor="">
                <input type="checkbox" name="" id="" />
                Include Numbers
            </label>
            <label htmlFor="">
                <input type="checkbox" name="" id="" />
                Include Symbols
            </label>
        </div>
    )
}

export default checkbox
