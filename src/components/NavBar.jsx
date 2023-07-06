import { Link } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link to={`/`}>Prova React B&G</Link>
        </h2>
        <ul>
            <li>
                <Link to={`/`}>Home</Link>
            </li>
            <li>
                <Link to={`/new`} className="new-btn">
                    Novo Post
                    </Link>
            </li>
            <li>
                <Link to={`/form`} className="new-btn">
                    Formulario
                    </Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar