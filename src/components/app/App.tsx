import { Link, Outlet } from 'react-router-dom';
import classes from './App.module.scss';




const Root = () => (
    <div>
        <Outlet />
    </div>
);




// className={classes.h1} 
// <Link to={'/about'}>about</Link>

export default Root;


