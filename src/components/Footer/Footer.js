import styles from './Footer.module.css';

const footer = () => {
    const year = new Date().getFullYear();
    const address = "226 Front Street, New Richmond, OH 45157";

    return (
        <div className={styles.footer}>
            <p>{address}</p>
            <p>© {year} Front Street Chop Shop</p>
        </div>
    );
};


export default footer;