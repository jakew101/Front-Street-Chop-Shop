import portrait from './PXL_20240724_185106452.PORTRAIT.ORIGINAL.jpg';
import styles from './About.module.css';

const About = () => {
    return (
        <div id="about" className={styles.aboutContainer}>
            <img src={portrait} alt="Portrait of Lane Dees"/>
            <div className={styles.paragraph}>
                <p>Lane Dees is a dedicated barber who has been proudly serving the New Richmond, OH community since 2021. With a passion for precision and a keen eye for detail, Lane has quickly built a reputation for delivering top-notch haircuts and grooming services. Whether you’re looking for a classic cut or something more modern, Lane’s expertise and commitment to customer satisfaction ensure that every client leaves the chair feeling confident and looking their best.</p>
            </div>
        </div>
    );
};


export default About;