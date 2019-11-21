import React from 'react';
import { Link } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/compo1'>Component1</Link></li>
        <li><Link to='/compo2'>Component2</Link></li>
        <li><Link to='/compo3'>Component3</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
