import { NavLink } from 'react-router-dom';
import "./Active_Link.css"
const Active_Link = ({to , children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive}) => isActive? "active" : "" }
        >
           {children}
        </NavLink>
    );
};

export default Active_Link;