import { Fragment } from "react";
import classes from './Header.module.css';
import meals from '../../Assests/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";
 const Header=props=>{
     return(
         <Fragment>
             <header className={classes.header}>
                 <h1>Food Order App</h1>
                 <HeaderCartButton/>
             </header>
        <div className={classes['main-image']}>
                <img src={meals} alt="A table of Delicious Food"/>
             </div>
         </Fragment>
     )
 }
 export default Header;