import Navbar from './components/Navbar';
import WorkshopCard from './components/WorkshopCard'; // Naya component import
import './App.css';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#1a202c', minHeight: '100vh' }}>
      {/* 1. Navbar: Screen ke top par fixed rahega */}
      <Navbar />

      {/* 2. Hero Section: Pehla impression jo user ko dikhega */}
      <header style={{ 
        padding: '80px 20px', 
        textAlign: 'center', 
        color: 'white',
        borderBottom: '1px solid #2d3748'
      }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '15px' }}>
          FOSSEE Workshop Booking
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#cbd5e0', maxWidth: '700px', margin: '0 auto' }}>
          Improve your skills with open-source software workshops. 
          Designed for performance and mobile accessibility. 🚀
        </p>
      </header>

      {/* 3. Workshops Section: Yahan hum saari workshops dikhayenge */}
      <main style={{ padding: '40px 20px' }}>
        <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '30px' }}>
          Upcoming Workshops
        </h2>
        
        {/* Is div ko humne 'flex' banaya hai taaki cards mobile par line se dikhein */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '20px' 
        }}>
          {/* Pehla Card */}
          <WorkshopCard 
            title="Python Programming" 
            date="April 25, 2026" 
            desc="Learn Python from scratch with FOSSEE's expert mentors." 
          />
          
          {/* Dusra Card */}
          <WorkshopCard 
            title="React UI Redesign" 
            date="May 02, 2026" 
            desc="Master modern UI/UX principles and responsive web design." 
          />

          {/* Teesra Card */}
          <WorkshopCard 
            title="Open Source Software" 
            date="May 10, 2026" 
            desc="Explore the world of FOSS and contribute to global projects." 
          />
        </div>
      </main>
    </div>
  );
}

export default App;