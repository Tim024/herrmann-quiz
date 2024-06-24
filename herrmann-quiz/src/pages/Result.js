import React from "react";
import { useLocation } from "react-router-dom";
import { Scatter } from "react-chartjs-2";
import { Link } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const ResultPage = () => {
  const location = useLocation();
  const results = location.state?.results || [];

  const average = results.reduce(
    (acc, cur) => {
      return { x: acc.x + cur.effect.x, y: acc.y + cur.effect.y };
    },
    { x: 0, y: 0 }
  );
  const numResults = results.length;
  const avgPoint = { x: average.x / numResults, y: average.y / numResults };

  // Determine the quadrant of the average point
  let quadrantText = "You are balanced between all quadrants.";
  if (avgPoint.x < 0 && avgPoint.y > 0) {
    quadrantText = "You lean towards the Logical quadrant (A).";
  } else if (avgPoint.x > 0 && avgPoint.y > 0) {
    quadrantText = "You lean towards the Creative quadrant (D).";
  } else if (avgPoint.x < 0 && avgPoint.y < 0) {
    quadrantText = "You lean towards the Organizational quadrant (B).";
  } else if (avgPoint.x > 0 && avgPoint.y < 0) {
    quadrantText = "You lean towards the Interpersonal quadrant (C).";
  }

  const data = {
    datasets: [
      {
        label: "Individual Answers",
        data: results.map((res) => ({
          x: res.effect.x,
          y: res.effect.y,
          question: res.question,
          answer: res.answer,
        })),
        backgroundColor: "rgba(255, 99, 132, 0.7)",
        pointRadius: 5,
        pointHoverRadius: 8,
      },
      {
        label: "Average",
        data: [avgPoint],
        backgroundColor: "rgba(0, 0, 255, 1)",
        pointRadius: 10,
        pointHoverRadius: 15,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = ``;
            if (context.raw.question) {
              label += `\nQuestion: ${context.raw.question}`;
            }
            if (context.raw.answer) {
              label += `\nAnswer: ${context.raw.answer}`;
            } else {
              label = `X: ${context.raw.x}, Y: ${context.raw.y}`;
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        type: "linear",
        display: false, // This hides the axis
        min: -1,
        max: 1,
      },
      y: {
        type: "linear",
        display: false, // This hides the axis
        min: -1,
        max: 1,
      },
    },
  };

  return (
    <div className="centered-text">
      <h1 className="centered-text">Your Brain Quadrant Results</h1>
      {/* Results: {JSON.stringify(results)} */}
      <p className="result-text centered-text">{quadrantText}</p>
      <div className="chart-container">
        <div className="canvas-container">
          {/* Add offset to account for axis labels */}
          <Scatter
            data={data}
            options={options}
            width={100}
            height={100}
            style={{ paddingTop: "10px", paddingRight: "10px" }}
          />
        </div>
      </div>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default ResultPage;
