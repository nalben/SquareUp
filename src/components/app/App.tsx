import { Link, Outlet } from 'react-router-dom';
import classes from './App.module.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import "@/styles/general.scss";
import "@/styles/fonts.scss";
import "@/styles/variables.scss";




const Root = () => (
    <div className={classes.sitecon}>
        <div className={classes.sitewrapper}>
            <Header />
            <main className={classes.pagecontent}>
                <Outlet />
            </main>
            <Footer />
        </div>
    </div>
);





{/* <div className={classes.wrapper}></div> */}
// <Link to={'/about'}>about</Link>

export default Root;


