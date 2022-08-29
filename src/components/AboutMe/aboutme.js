import './aboutme.css';
import faceshot from '../images/faceshot.jpg'

export function AboutMe(){
    return(
        <div className = "AboutMeSection">
            <div className="Title">
                <h1>About Me</h1>
            </div>
            <div className = "AboutMeContent">
                <img src ={faceshot} alt="img not found" className='headshot'></img>
                <ul>
                    <li>Graduated from California Polytechnic University in 2021 </li>
                    <li>Global Tech Intern at Nike, DA Intern at Casper </li>
                    <li>Have experience building frontend uis, developing apis, and working with databases </li>
                    <li>I enjoy weightlifting, cooking, collecting sneakers, and basketball</li>
                    <li>Always looking for good travel reccomendations!</li> 
                </ul> 
            </div>
        </div>
    )
}