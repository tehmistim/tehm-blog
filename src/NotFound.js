import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Page cannot be found</h2>
            <p>double check where you want to go</p>
            <Link to="/">Back to Homepage</Link>
        </div>
     );
}
 
export default NotFound;