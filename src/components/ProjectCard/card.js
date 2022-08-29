import './card.css';
export function ProjectCard(props){
    return (
        <div className='container'>
            <div className='card1'>
                <a href={props.link}>
                    <img className= 'img' src = {props.img} alt = 'nothing'></img>
                </a>
                <div className='intro'>
                    <h1 style={{fontSize : "25px"}}>{props.name}</h1>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}