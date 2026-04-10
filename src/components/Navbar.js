function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '15px 30px',
      backgroundColor: '#2d3748',
      color: 'white',
      alignItems: 'center'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>FOSSEE</div>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', margin: 0 }}>
        <li>Home</li>
        <li>Workshops</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;