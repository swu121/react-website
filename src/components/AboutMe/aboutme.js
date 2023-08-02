import './aboutme.css';
import faceshot from '../images/profile.jpg'

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
                    <li>Software Engineer at Nike  </li>
                    <li>I enjoy weightlifting, cooking, golfing, snowboarding, and live music events</li>
                    <li>Always looking for good travel recommendations!</li> 
                </ul> 
            </div>
        </div>
    )
}