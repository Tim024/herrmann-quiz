// src/components/WelcomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => (
    <div className="homepage-content half-page-width">
    <h1>Welcome to the Brain Dominance Quiz</h1>
    <p>Welcome to the Brain Dominance Quiz, designed to help you discover your preferred thinking style based on the Whole Brain Model. 
    This model outlines four distinct quadrants of thinking: Analytical, Practical, Relational, and Experimental. 
    Each of us has the ability to think in all four quadrants, but we often have preferences for some over others. 
    Understanding your thinking preferences can empower you to enhance communication, solve problems more effectively, 
    and improve your personal and professional relationships.</p>
    <p>Through a series of questions, this quiz will help you identify which of the four quadrants you naturally gravitate towards. By gaining insights into your dominant thinking style, you can leverage your strengths, recognize potential areas for growth, and develop strategies to interact more effectively with others who may have different thinking preferences. Let's embark on this journey to better understand how you think and how you can use this knowledge to enrich various aspects of your life.</p>
    <Link to="/quiz"><button>Start Quiz</button></Link>
  </div>
);

export default WelcomePage;
