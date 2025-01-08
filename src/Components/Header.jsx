import { Link } from "react-router-dom";
import {BiSearch} from "react-icons/bi"



const Header = () => {
  

 




  return (
    <nav className="Header">
      <img
        src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
        alt="Logo"
      />

      <div>
        <Link to="/tvshows"> TV Shows</Link>
        <Link to="/movies"> Movies</Link>
        <Link to="/recentlyadded"> Recently Added</Link>
        <Link to="/mylist"> My List</Link>
        
      </div>
      <BiSearch/>
      
    </nav>
  );
};

export default Header;
