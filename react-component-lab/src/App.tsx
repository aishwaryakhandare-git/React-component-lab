import "./index.css";

function App() {
  return (
  <div className="entire">

  <nav className="nav-bar">
    
    <h1  className="logo">Smart</h1>
    
     <div className="nav-links">

        <a href="#">Features</a>

        <a href="#">Pricing</a>

        <a href="#">Contact</a>

        <a href="#">Login</a>

    </div>
    
    </nav>
   
  <div className="whole-page">

    <div className="card">
    <div className="header-card">

    <h2>Aishwarya Khandare</h2>

    <p>Full Stack Web Developer</p>

    </div>

    <div className="skills-card">

      <p>Python  React.js  Typescript</p>

    </div>

    <div className="buttons">

      <button>Follow</button>

      <button>Message</button>
    </div>

    </div>

  </div>

  </div>
  );
}

export default App;