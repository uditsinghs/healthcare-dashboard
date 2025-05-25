import styles from '../styles/appointmentsCard.module.css';

import {detailedAppointments} from '../data/calendar'

function AppointmentsCard() {
  return (
    <div className={styles.cardsWrapper}>
      {detailedAppointments.map((a, i) => (
        <div
          key={i}
          className={styles.card}
          style={{
            background: a.color,
            color: a.textColor
          }}
        >
          <div className={styles.cardHeader}>
            <span className={styles.title}>{a.title}</span>
            <span className={styles.icon}>{a.icon}</span>
          </div>
          <div className={styles.time}>{a.time}</div>
          <div className={styles.doctor}>{a.doctor}</div>
        </div>
      ))}
    </div>
  );
}

export default AppointmentsCard;