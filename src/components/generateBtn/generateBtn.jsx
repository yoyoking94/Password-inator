/* eslint-disable react/prop-types */
import React from 'react'

/* import generateBtn component style */
import './generateBtn.css'

class GenerateBtn extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <button className='generateBtn' onClick={this.props.handleGenerate}>
            <span>GENERATE</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M5.10547 12L11.1054 6.00002L5.10547 0L3.84045 1.26501L7.68094 5.10547L0 5.10547V6.8946L7.68094 6.8946L3.84045 10.735L5.10547 12Z" fill="#24232C" />
            </svg>
        </button>;
    }
}

export default GenerateBtn;