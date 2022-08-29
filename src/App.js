import { ProjectSection } from './components/ProjectCard/projectsection';
import { Header } from '../src/components/Header'
import './App.css';
import { Resume } from './components/Resume/resume';
import { AboutMe } from './components/AboutMe/aboutme'
import {IconList} from './components/ContactIcons/iconlist'
import background from './components/images/back.svg'
function App() {
  return (
    <div className="App" style = {{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', height: '100vh',  backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="IntroDesc">
        <h1 style={{"--order": 1}} className="IntroText">Hey!</h1> 
        <h1 style={{"--order": 2}} className="IntroText">I'm Steven Wu - a</h1>
        <h1 style={{"--order": 3}} className="IntroText">software engineer</h1>
        <h1 style={{"--order": 4}} className="IntroText">based in Portland, OR</h1>
      </div>
      <IconList/>
      <Resume/>
      <ProjectSection/>
      <AboutMe/>
    </div>
  );
}

export default App;
