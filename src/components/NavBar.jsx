import { Link } from "react-router-dom";
import './navbar.css';

export default function NavBar() {
  return (
    <nav>
        <Link to='./'><h2>KONJENG</h2></Link>
        <div className="navBar">
            <Link to='./myfavorite'>My Favorite</Link>
            <Link to='./mytodo'>My Todo</Link>
            <Link to='./login'>Login</Link>
        </div>
    </nav>
  )
}
