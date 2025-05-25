import { calendarData } from '../data/calendar';
import styles from '../styles/calender.module.css';

function CalendarView() {
  const { month, appointments, weekDays } = calendarData;

  // Only show days 25 to 31 as in the UI
  const startDay = 25;
  const endDay = 31;

  // Calculate how many empty slots before the 25th (Mon=0, so 25th is Monday)
  // In your UI, 25th is under "Mon", so 0 empty slots
  const emptySlots = 0;

  return (
    <div className={styles.calender}>
      <div className={styles.header}>
        <span className={styles.month}>{month}</span>
        <div className={styles.nav}>
          <button className={styles.arrow}>&lt;</button>
          <button className={styles.arrow}>&gt;</button>
        </div>
      </div>
      <div className={styles.weekdays}>
        {weekDays.map((d, i) => (
          <span key={i} className={styles.weekday}>{d}</span>
        ))}
      </div>
      <div className={styles.container}>
        {/* Empty slots for days before the 25th */}
        {Array.from({ length: emptySlots }).map((_, i) => (
          <div key={`empty-${i}`} className={styles.dayCellEmpty}></div>
        ))}
        {/* Only render days 25 to 31 */}
        {Array.from({ length: endDay - startDay + 1 }, (_, i) => {
          const day = startDay + i;
          const times = appointments[day] || [];
          const isToday = day === 26; // Highlight 26th as today

          return (
            <div
              key={day}
              className={`${styles.dayCell} ${isToday ? styles.activeDay : ''}`}
            >
              <div className={styles.dayNumber}>{day}</div>
              <div className={styles.times}>
                {times.length === 0 ? (
                  <span className={styles.noTime}>—</span>
                ) : (
                  times.map((time, idx) => (
                    <div
                      key={idx}
                      className={`${styles.timeSlot} ${
                        isToday && idx === 1 ? styles.selectedTime : ''
                      }`}
                    >
                      {time}
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CalendarView;