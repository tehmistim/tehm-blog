import { useState, useEffect } from 'react';
import ThoughtList from './ThoughtList';

const Home = () => {
    const [thoughts, setThoughts] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect (() => {
        setTimeout(() => {
            //we usually do not set a setTimeout in real world useage
            fetch('http://localhost:8000/thoughts')
        .then(res => {
            return res.json();
        })
        .then((data) => {
            setThoughts(data);
            setIsPending(false);
        });
        }, 1000);
    }, []);

    return ( 
        <div className= "home">
            { isPending && <div>Loading...</div> }
            {thoughts && <ThoughtList thoughts={ thoughts } title="All Thoughts" />}
        </div>
     );
}
 
export default Home;