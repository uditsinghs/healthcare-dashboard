import { upcomingSchedule } from '../data/appointments';
import styles from '../styles/upcomingSchedule.module.css';

const icons = {
  heart: "❤️",
  eye: "👁️",
  brain: "🧑‍⚕️",
  general: "💉"
};

function UpcomingSchedule() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>The Upcoming Schedule</h1>
      {upcomingSchedule.map((block, idx) => (
        <div key={idx}>
          <div className={styles.day}>{block.day}</div>
          <div className={styles.cardsRow}>
            {block.items.map((item, i) => (
              <div className={styles.card} key={i}>
                <div className={styles.cardHeader}>
                  <span className={styles.title}>{item.title}</span>
                  <span className={styles.icon}>{icons[item.type]}</span>
                </div>
                <div className={styles.time}>{item.time}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;