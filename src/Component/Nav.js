import { NavLink } from "react-router-dom"
import "../Component/Nav.scss"

const Nav = () => {
    return (
        <div className="topnav">
            {/* <NavLink to="/" activeclassname="active">Home</NavLink>
            <NavLink to="/todo" activeclassname="active">Youtube</NavLink>
            <NavLink to="/covid" activeclassname="active">Youtube</NavLink>
            <NavLink to="/user" activeclassname="active">Youtube</NavLink> */}
            <NavLink to="/" activeclassname="active">Youtube</NavLink>
            
        </div>
    )
}

export default Nav