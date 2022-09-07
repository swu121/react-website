import git from '../images/git.png'
import linkedin from '../images/linkedin.png'
import './iconlist.css'
import resumepdf from '../images/resume.pdf'
import React from 'react'
import { pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export function IconList(){
    return (
        <div className='container1'>
            <a href='https://github.com/swu121'>
                <img style={{"--order": 1}} className = 'images' src= {git} alt = "git"/>
            </a>
            <a href='https://www.linkedin.com/in/swu121/'>
                <img style={{"--order": 2}} className = 'images' src = {linkedin} alt = "linkedin"/>
            </a>
            <a href={resumepdf} download>
                <button style={{"--order": 3}} type="button" className ="btn btn-dark">Resume</button>
            </a>
            <a href='mailto:swu121@gmail.com'>
                <button style={{"--order": 4}} type="button" className ="btn btn-dark">Contact</button>
            </a>
        </div>
    )
}