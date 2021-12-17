import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('tim');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        //prevents a refresh before submitting
        const thought = { title, body, author };

        setIsPending(true)

        fetch('http://localhost:8000/thoughts', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(thought)
        //Posts create form submit to db.json
        }).then(() => {
            console.log('new thought added')
            setIsPending(false);
            // history.go(1);
            //history.go goes to previous page after submit
            history.push('/')
            //sends user back to homepage of all thoughts
        })

    }

    return ( 
        <div className="create">
            <h2>Create New Thought</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Thought title:
                </label>
                <input  type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        //this sets the input placed by the user
                />
                <label>
                    Thought body:
                    <textarea 
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}                      
                    />
                    <label>
                        Thought author:
                    </label>
                    <select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="tehm">Tehm</option>
                        <option value="tim">Tim</option>
                    </select>
                    { !isPending && <button>Add Thought</button> }
                    { isPending && <button disabled>Adding Thought ...</button> }

                    <p>{ title }</p>
                    <p>{ body }</p>
                    <p>{ author }</p>
                </label>
            </form>
        </div>    
     );
}
 
export default Create;