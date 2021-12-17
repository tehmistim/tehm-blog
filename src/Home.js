import ThoughtList from './ThoughtList';
import useFetch from './useFetch';

const Home = () => {
    const { data: thoughts, isPending, error} = useFetch('http://localhost:8000/thoughts');
    //custom hook js



    return ( 
        <div className= "home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            {thoughts && <ThoughtList thoughts={ thoughts } title="All Thoughts" />}
        </div>
     );
}
 
export default Home;