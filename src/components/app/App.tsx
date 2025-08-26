import { Link, Outlet } from 'react-router-dom';
import classes from './App.module.scss';




const Root = () => (
    <div>
        <ul className={classes.ul} >
            <li><Link to={'/about'}>about</Link></li>
            <li><Link to={'/shop'}>shop</Link></li>
            <li><Link to={'/profile'}>profile</Link></li>
        </ul>
        <Outlet />
    </div>
);




// className={classes.h1} 
// <Link to={'/about'}>about</Link>

export default Root;


