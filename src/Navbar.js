import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Tehm's Thoughts</h1>
            <div className = "links">
                <Link to= "/">Home </Link>
                <Link to= "/create" style={ {
                    color: '#ff004c',
                } }>New Thought</Link>
                <Link to= "/about">About</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;