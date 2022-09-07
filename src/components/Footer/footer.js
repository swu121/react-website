import * as React from 'react';
import "./footer.css"


export function Footer(){
    return(
        <div className="main">
            <div className = 'textcontainer'>
                <h1 className='footertext' style={{fontSize: '35px'}}>Contact</h1>
                <h2 className='footertext'>swu121@gmail.com || linkedin.com/in/swu121</h2>
                <h3 className='footertext'>&copy; 2022</h3>
            </div>
        </div>
    )
}