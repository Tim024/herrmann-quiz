import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import questions from './questions'; // Ensure the path is correct

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [results, setResults] = useState([]);
  const [sliderValue, setSliderValue] = useState(50); // Default to 50 to start in the middle
  const navigate = useNavigate();

  useEffect(() => {
    if (currentQuestion === questions.length) {
      navigate("/result", { state: { results } });
    }
  }, [currentQuestion, results, navigate]);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleAnswer = () => {
    const effect1 = questions[currentQuestion].answers[0].effect;
    const effect2 = questions[currentQuestion].answers[1].effect;

    // Calculate the interpolated effects based on the slider value
    const interpolatedEffect = {
      x: effect1.x + (effect2.x - effect1.x) * (sliderValue / 100),
      y: effect1.y + (effect2.y - effect1.y) * (sliderValue / 100)
    };

    const response = {
      question: questions[currentQuestion].question,
      answer: `Slider at ${sliderValue}%`,
      effect: interpolatedEffect
    };

    setResults([...results, response]);
    setCurrentQuestion(currentQuestion + 1);
  };

  if (currentQuestion < questions.length) {
    return (
      <div className="half-page-width">
        <h2 className="question-header">{questions[currentQuestion].question}</h2>
        {/* <p>Current Results: {JSON.stringify(results)}</p> */}
        <div className="centered-text">
          <div className="slider-container">
            <div className="slider-answer">{questions[currentQuestion].answers[0].text}</div>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={sliderValue}
              onChange={handleSliderChange}
              className="slider"
            />
            <div className="slider-answer">{questions[currentQuestion].answers[1].text}</div>
          </div>
          <button onClick={handleAnswer}>Submit Answer</button>
        </div>
      </div>
    );
  } else {
    return <div>Loading results...</div>;
  }
};

export default Quiz;
