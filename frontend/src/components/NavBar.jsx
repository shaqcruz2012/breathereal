import { Link } from "react-router-dom"

const NavBar = ()=> {
    return (
        <div>
            <h1>Authorization Page</h1>
            <Link to={'/'}>Sign UP</Link>
            <Link to={'/login/'}>LogIn</Link>
            <Link to={'/tasks/'}>Tasks</Link>
        </div>
    )
}

export default NavBar;