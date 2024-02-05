import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropDown from './dropdown';
import RecipeList from './recipes'; // Import the RecipeList component

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* Navigation Links */}
          <nav>
            <ul>
              {/* Add navigation links here if needed */}
            </ul>
          </nav>
          <Routes>
            <Route path="/selectedRecipe" />
            <Route path="/recipe/:recipeId" element={<RecipeList />} /> {/* Route for individual recipe pages */}
          </Routes>
        </div>
      </Router>

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

        <DropDown/>

      </div>

      <footer className="footer">
        <h2 id="copyright">© 2024 Avocado Inc.</h2>
        <a href="https://facebook.com" className="fa fa-facebook" ></a>
        <a href="https://twitter.com" className="fa fa-twitter" ></a>
        <a href="https://youtube.com" className="fa fa-youtube"></a>
        <a href="https://instagram.com" className="fa fa-instagram"></a>
        <a href="https://linkedin.com" className="fa fa-linkedin"></a>
      </footer>
    </div>
  );
}

export default App;
