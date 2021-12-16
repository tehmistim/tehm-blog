const ThoughtList = ({ thoughts, title, handleDelete }) => {
    // const thoughts = props.thoughts;
    // const title = props.title;
    

    return ( 
        <div className="thought-list">
            <h2>{ title }</h2>
            {thoughts.map((thought) => (
                <div className="thought-preview" key={thought.id}>
                    <h2>{ thought.title }</h2>
                    <p>by: { thought.author }</p>
                    <button onClick={() => handleDelete(thought.id)}>delete thought</button>
                </div>
            ))}
        </div>
     );
};
 
export default ThoughtList;