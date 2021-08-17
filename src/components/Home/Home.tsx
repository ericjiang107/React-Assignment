import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Gunpla1 from '../../assets/images/BpPClvOtaMywZFGmLxuT14i-tQPjOY78LIySutfAf3E.png'
import { Link } from 'react-router-dom'

interface Props {
    title: string ;
}

// makeStyles Hook:
const useStyles = makeStyles({
    root: {
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between', //everything is evenly spaced as far as the nav items
        alignItems: 'center'
    },
    logo: {
        margin: '0 0 0 0.45em'
    },
    logo_a: {
        color: 'rgb(28,24,22)',
        fontSize: '2.5rem'
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex'
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'black',
        fontSize: '1.3rem'
    },
    main: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Gunpla1});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontSize: '1.3rem'
    },
    colorfulButton: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 30,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 35,
        padding: '0 30px',
    },
    logoButton: {
        background: 'linear-gradient(to right bottom, #430089, #0d47a1)',
        borderRadius: 30,
        padding: '0 30px',
        color: 'white',
        height: 28,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
    }
})


export const Home = (props:Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={classes.logo}>
                        <Link to='/' className={ `${classes.logo_a} ${classes.logo_navigation} ${classes.logoButton}` }>Gunpla</Link>
                    </h1>
                    <ul className={`${classes.navigation} ${classes.logo_navigation}`}>
                        <li>
                            <Link to='/' className={`${classes.nav_a} ${classes.logoButton}`}>Home</Link>
                        </li>
                        <li>
                            <Link to='/signin' className={`${classes.nav_a} ${classes.logoButton}`}>SignIn</Link>
                        </li>
                        <li>
                            <Link to='/dashboard' className={`${classes.nav_a} ${classes.logoButton}`}>Purchase Kits</Link> 
                            {/* '/dashboard' leads to the purchase kit site */}
                        </li>
                    </ul>
                </div>
            </nav>
            <main className={classes.main}>
                <div className={classes.main_text}>
                    <h1>{props.title}</h1>
                    <p>Welcome to the Gunpla Gallery World!</p>
                    <Button className={classes.colorfulButton}>Styled with Hook API</Button>
                </div>
            </main>
        </div>
    )
}