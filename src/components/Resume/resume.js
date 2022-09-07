import './resume.css';
import resumepdf from '../images/resume.pdf'
import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function Resume(){
    return(
        <div className="ResumeSection">
            <h1 className="Title">Resume</h1>
            <div className='flexible'>
                <Document file={resumepdf}>
                    <Page pageNumber={1}/>
                </Document>
            </div>
        </div>
    )
}