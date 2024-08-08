import styles from './Hours.module.css';


function Hours({ hours }) {
  if (!hours || !hours.weekday_text) {
    return <p>Hours of operation not available.</p>;
  }

  return (
    <div id="hours" className={styles.background}>
        <div className={styles.container}>
        <h3>Hours of Operation</h3>
        <ul className={styles.list}>
            {hours.weekday_text.map((day, index) => (
            <li key={index}>{day}</li>
            ))}
        </ul>
        </div>
    </div>
  );
}

export default Hours;
