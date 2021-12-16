const ThoughtList = ({ thoughts, title, }) => {
    // const thoughts = props.thoughts;
    // const title = props.title;
    

    return ( 
        <div className="thought-list">
            <h2>{ title }</h2>
            {thoughts.map((thought) => (
                <div className="thought-preview" key={thought.id}>
                    <h2>{ thought.title }</h2>
                    <p>by: { thought.author }</p>
                </div>
            ))}
        </div>
     );
};
 
export default ThoughtList;