import { useState, useEffect } from 'react';
import ThoughtList from './ThoughtList';

const Home = () => {
    const [thoughts, setThoughts] = useState(null);

    const[name, setName] = useState('tim');

    const handleDelete = (id) => {
        const newThoughts = thoughts.filter(thought => thought.id !== id);
        setThoughts(newThoughts);

    };
    
    useEffect (() => {
        fetch('http://localhouse:8000/thoughts')
        .then(res => {
            return res.json();
        })
        .then((data) => {
            setThoughts(data);
        })
    }, []);

    return ( 
        <div className= "home">
            <ThoughtList thoughts={ thoughts } title="All Thoughts" handleDelete={ handleDelete }/>

        </div>
     );
};
 
export default Home;