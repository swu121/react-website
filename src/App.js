import { ProjectCard } from './components/ProjectCard';
import { Header } from '../src/components/Header'
import './App.css';
import { Resume } from './components/ContentSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="IntroDesc">
        <h1 className="IntroText">Hey!</h1> 
        <h1 className="IntroText">I'm Steven Wu - a curious</h1>
        <h1 className="IntroText">software engineer</h1>
        <h1 className="IntroText">based in San Francisco, CA</h1>
      </div>
      <div className="Projects">
        <ProjectCard name="PokeDex" description="Vue.ts, Express, Node.js, Google Firebase/Firestore, Heroku" img="https://cdn.dribbble.com/users/817492/screenshots/5814123/pokedex_dribbble.png"/> 
        <ProjectCard name="Yelp" description="React.js, Express, Node.js, MongoDB" img="https://media.istockphoto.com/vectors/street-cafe-cafe-shop-in-old-french-style-vector-id1257263077?b=1&k=20&m=1257263077&s=170667a&w=0&h=-dYp5WFPmhNfkEdMuhW97KZj0DjAX8Uf9ajdnQwmTvw="/>
      </div>
      <Resume/>

    </div>
  );
}

export default App;
