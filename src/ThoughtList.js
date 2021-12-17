import { Link } from "react-router-dom";

const ThoughtList = ({ thoughts, title, }) => {
    // const thoughts = props.thoughts;
    // const title = props.title;
    

    return ( 
        <div className="thought-list">
            <h2>{ title }</h2>
            {thoughts.map((thought) => (
                <div className="thought-preview" key={thought.id}>
                    <Link to={`/thoughts/${thought.id}`}>
                        <h2>{ thought.title }</h2>
                        <p>by: { thought.author }</p>
                    </Link>
                </div>
            ))}
        </div>
     );
};
 
export default ThoughtList;