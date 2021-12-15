const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Tehm's Thoughts</h1>
            <div className = "links">
                <a href= "/">Home </a>
                <a href= "/create" style={ {
                    color: '#ff004c',
                } }>New Thought</a>
            </div>
        </nav>
    );
}
 
export default Navbar;