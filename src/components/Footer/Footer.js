import styles from './Footer.module.css';

const footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className={styles.footer}>
            <p>© {year} Front Street Chop Shop</p>
        </div>
    );
};


export default footer;