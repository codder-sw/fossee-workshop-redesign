function WorkshopCard({ title, date, desc }) {
  return (
    <div style={{
      backgroundColor: '#2d3748',
      color: 'white',
      padding: '20px',
      borderRadius: '12px',
      margin: '15px',
      textAlign: 'left',
      width: '90%', // Mobile friendly width
      maxWidth: '350px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
    }}>
      <h3 style={{ color: '#63b3ed' }}>{title}</h3>
      <p style={{ fontSize: '0.9rem', color: '#a0aec0' }}>📅 {date}</p>
      <p style={{ marginTop: '10px' }}>{desc}</p>
      <button style={{
        marginTop: '15px',
        width: '100%',
        padding: '10px',
        backgroundColor: '#3182ce',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>
        Register Now
      </button>
    </div>
  );
}
export default WorkshopCard;