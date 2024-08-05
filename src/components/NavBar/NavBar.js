import styles from './NavBar.module.css';
import logo from './FRONT STREET.png';

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <img src={logo} alt="Front Street Chop Shop logo" />
            <ul>
                <a href="#"><li>Home</li></a>
                <a href="#about"><li>About</li></a>
                <a href="#services"><li>Services</li></a>
                <a href="#location"><li>Location</li></a>
            </ul>
        </div>
    );
};


export default NavBar;