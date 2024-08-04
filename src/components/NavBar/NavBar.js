import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <img src="" alt="Front Street Chop Shop logo" />
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