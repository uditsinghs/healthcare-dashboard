function SimpleAppointmentCard({ title, time, type }) {
  const icon = type === 'heart' ? '❤️'
             : type === 'eye' ? '👁️'
             : type === 'brain' ? '🧠'
             : '✅';

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: '1rem',
      borderRadius: '10px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
      marginBottom: '1rem'
    }}>
      <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>{icon}</span>
      <div>
        <h4 style={{ margin: 0 }}>{title}</h4>
        <p style={{ margin: 0, fontSize: '0.8rem', color: '#888' }}>{time}</p>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;
