import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AvocadoToast from "./RecipePage";
import DropDown from './dropdown';

function App() {
  const [showMainContent, setShowMainContent] = useState(true);
  return (
    <div className="App">
      <Router>
      <div>
        {/* Navigation Links */}
        <nav>
          <ul>
            {/* Use Link instead of <a> for internal navigation */}
            <li><Link to="/test">Test</Link></li>
          </ul>
        </nav>

      
        {/* Route Configuration */}
        <Routes>
          <Route path="/" element={showMainContent ? <AvocadoToast /> : null} />
          <Route path="/test" element={<TestPage setShowMainContent={setShowMainContent} />} />
        </Routes>
      </div>
    </Router>

    {showMainContent && (
      <>
      <header className="App-header">
        <img src="/images/avocado-transparent.png" alt="Logo" className="App-logo" />
        <div className="Header-content">
          <div>Avocado Inc.</div>
          <div className="Subtitle">Delicious Recipes</div>
        </div>
      </header>

      <div className="App-body">
        <div className="Scroll-Instruction">
          When you select a recipe,
          scroll down to view full recipe!
        </div>

        <DropDown />

      </div>

      <footer className="footer">
        <h2 id="copyright">© 2024 Avocado Inc.</h2>
        <a href="https://facebook.com" class="fa fa-facebook" ></a>
        <a href="https://twitter.com" class="fa fa-twitter" ></a>
        <a href="https://youtube.com" class="fa fa-youtube"></a>
        <a href="https://instagram.com" class="fa fa-instagram"></a>
        <a href="https://linkedin.com" class="fa fa-linkedin"></a>
      </footer>
      </>
      )};
    </div>
  );
}

function TestPage({ setShowMainContent }) {
  // This function will hide the main content when the test page is rendered
  setShowMainContent(false);

  // You can return whatever content you want to show in the test page
  return (
    <div>
      <h2>This is the Test Page</h2>
      <button onClick={() => setShowMainContent(true)}>Go Back</button>
    </div>
  );
}

export default App;
