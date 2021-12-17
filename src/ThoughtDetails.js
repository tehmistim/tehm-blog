import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from './useFetch';

const ThoughtDetails = () => {
    const { id } = useParams();
    const { data: thought, error, isPending } = useFetch('http://localhost:8000/thoughts/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/thoughts/' + thought.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
        //asking json server to delete the thought
    }

    return ( 
        <div className="thought-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { thought && (
                <article>
                    <h2>{ thought.title }</h2>
                    <p>by: { thought.author }</p>
                    <div>{ thought.body }</div>
                    <button onClick={ handleClick }>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default ThoughtDetails;