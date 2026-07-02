import "./index.css";
import hero from "./assets/hero.png";

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

    <div className="header-card">

    <h1>SmartAI</h1>

    <h4>Build Modern Web Applications.</h4>

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

    <div className="hero-image">
      <img src={hero} alt="AI Robot" />
    </div>
    
  </div>
  </div>
  );
}

export default App;