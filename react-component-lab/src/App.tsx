import "./index.css";

function App() {
  return (
  <div className="entire">

  <nav className="nav-bar">
    
    <h1  className="logo">Smart <span>AI</span></h1>
    
     <div className="nav-links">

        <a href="#">Features</a>

        <a href="#">Pricing</a>

        <a href="#">Contact</a>

        <a href="#">Login</a>

    </div>
    
    </nav>
   
  <div className="hero">

    <div className="hero-content">

    <div className="hero-image"></div>
    
    <div className="header-card">

    <h2>SmartAI</h2>

    <p>Build Modern Web Applications.</p>

    </div>

    <div className="content-card">

      <p>Learn React, TypeScript, CSS and Backend
      development by building real-world projects.</p>

    </div>

    <div className="buttons">

      <button>Start Learning</button>

      <button>View Projects</button>
    </div>

    </div>

  </div>

  </div>
  );
}

export default App;