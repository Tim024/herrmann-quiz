// src/components/WelcomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => (
    <div className="homepage-content">
    <h1>Welcome to the Brain Dominance Quiz</h1>
    <p>This quiz will help you determine which quadrant of the Herrmann Brain Model you lean towards.</p>
    <p>Answer a series of questions to discover whether you are a logical, practical, relational, or experimental thinker.</p>
    <Link to="/quiz"><button>Start Quiz</button></Link>
  </div>
);

export default WelcomePage;
