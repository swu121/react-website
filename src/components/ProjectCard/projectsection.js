import { ProjectCard } from "./card";
import './projectsection.css';

export function ProjectSection(){
    return (
        <div className="Projects">
            <h1>Projects</h1>
            <div className="cardsection">
                <ProjectCard link = "https://glittering-puppy-ec47ad.netlify.app/" name="PokeDex" description="Vue.ts, Express, Node.js, Google Firebase/Firestore, Heroku" img="https://cdn.dribbble.com/users/817492/screenshots/5814123/pokedex_dribbble.png"/> 
                <ProjectCard link = "https://magical-gelato-d6af57.netlify.app" name="Yelp" description="React.js, Express, Node.js, MongoDB" img="https://media.istockphoto.com/vectors/street-cafe-cafe-shop-in-old-french-style-vector-id1257263077?b=1&k=20&m=1257263077&s=170667a&w=0&h=-dYp5WFPmhNfkEdMuhW97KZj0DjAX8Uf9ajdnQwmTvw="/>
            </div>
        </div>
    )
}