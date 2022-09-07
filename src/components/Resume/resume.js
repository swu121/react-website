import './resume.css';
export function Resume(){
    return(
        <div className="ResumeSection">
            <h1 className="Title">Resume</h1>
            <object data="http://africau.edu/images/default/sample.pdf" type="application/pdf" width="100%" height="100%" style= {{height:"700px"}}>
                <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
            </object>
        </div>
    )
}