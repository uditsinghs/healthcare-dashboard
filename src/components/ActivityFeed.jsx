import styles from '../styles/activity.module.css'
function ActivityFeed() {
  const bars = [
    { day: "Mon", height: 40 },
    { day: "Tue", height: 60 },
    { day: "Wed", height: 30 },
    { day: "Thu", height: 80 },
    { day: "Fri", height: 50 },
    { day: "Sat", height: 90 },
    { day: "Sun", height: 20 }
  ];

  return (
    <div className={styles['activity-feed']}>
      <h3>Activity</h3>
      <p className={styles['heading']}>3 appointments this week</p>

      <div className={styles['bar-container']}>
        {bars.map((bar, idx) => (
          <div key={idx} style={{ textAlign: 'center' }}>
            <div style={{
              width: '60px',
              height: `${bar.height}px`,
              backgroundColor: '#4f46e5',
              borderRadius: '4px',
              marginBottom: '5px'
            }}></div>
            <span className={styles['day']}>{bar.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;
