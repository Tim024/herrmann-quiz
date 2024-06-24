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

  // Determine the quadrant of the average point and set the corresponding content
  let quadrantContent = null;
  if (avgPoint.x < 0 && avgPoint.y > 0) {
    quadrantContent = (
      <div className="quadrant">
        <h2>Quadrant A (Analytical)</h2>
        <p><strong>Description:</strong> The Analytical quadrant is characterized by logical, factual, and quantitative thinking. People with a preference for this style excel at problem-solving, data analysis, and making decisions based on evidence and facts.</p>
        <p><strong>Explanation:</strong> Individuals in this quadrant rely heavily on logical reasoning and objective analysis. They are adept at breaking down complex problems into manageable parts, using data and evidence to inform their decisions. Analytical thinkers are methodical and detail-oriented, often seeking out the most efficient and effective solutions.</p>
        <p><strong>Impact:</strong></p>
        <ul>
          <li><strong>At Work:</strong> Analytical thinkers thrive in roles that require data analysis, financial modeling, and strategic planning. They are invaluable in fields like finance, engineering, and research, where precision and accuracy are paramount. Their ability to dissect problems and focus on details makes them excellent at developing data-driven strategies and solutions.</li>
          <li><strong>Personal Life:</strong> In their personal lives, analytical thinkers apply the same logical approach to decision-making and problem-solving. They are likely to meticulously plan their finances, organize their daily routines, and make decisions based on careful consideration of all available information.</li>
        </ul>
        <p className="risk"><strong>Risks:</strong> Analytical thinkers may struggle with indecision if they lack sufficient data, and their focus on logic can sometimes come across as cold or unfeeling to others. They might also miss out on creative solutions by focusing too narrowly on the data.</p>
      </div>
    );
  } else if (avgPoint.x > 0 && avgPoint.y > 0) {
    quadrantContent = (
      <div className="quadrant">
        <h2>Quadrant D (Experimental)</h2>
        <p><strong>Description:</strong> The Experimental quadrant is characterized by creative, holistic, and intuitive thinking. Individuals with a preference for this style excel at generating innovative ideas and exploring new possibilities.</p>
        <p><strong>Explanation:</strong> Experimental thinkers are visionary and imaginative. They thrive on synthesizing information from various sources and thinking outside the box to develop novel solutions. Their intuitive approach allows them to see connections and opportunities that others might overlook.</p>
        <p><strong>Impact:</strong></p>
        <ul>
          <li><strong>At Work:</strong> Experimental thinkers shine in roles that require creativity and innovation, such as product design, marketing, and strategic development. They are adept at brainstorming new ideas, prototyping solutions, and challenging conventional thinking. Their ability to envision the big picture and embrace change makes them valuable assets in dynamic, forward-thinking environments.</li>
          <li><strong>Personal Life:</strong> In their personal lives, experimental thinkers seek out new experiences and enjoy exploring unconventional paths. They are likely to engage in creative hobbies, travel to new places, and embrace change with enthusiasm. Their open-mindedness and curiosity drive them to constantly seek out new adventures and opportunities for growth.</li>
        </ul>
        <p className="risk"><strong>Risks:</strong> Experimental thinkers may struggle with follow-through and consistency, as they are often more interested in generating ideas than in executing them. Their tendency to take risks and pursue unconventional paths can sometimes lead to instability and unpredictability.</p>
      </div>
    );
  } else if (avgPoint.x < 0 && avgPoint.y < 0) {
    quadrantContent = (
      <div className="quadrant">
        <h2>Quadrant B (Practical)</h2>
        <p><strong>Description:</strong> The Practical quadrant emphasizes planning, organizing, and sequencing information. Those with a preference for practical thinking excel in creating order out of chaos and ensuring that projects and tasks are executed efficiently.</p>
        <p><strong>Explanation:</strong> Practical thinkers are detail-oriented and systematic. They prefer structured environments where they can plan and organize tasks meticulously. They focus on the practical aspects of any situation, ensuring that all components are managed effectively to achieve desired outcomes.</p>
        <p><strong>Impact:</strong></p>
        <ul>
          <li><strong>At Work:</strong> Practical thinkers are indispensable in roles such as project management, event planning, and operations. They excel at creating detailed plans, setting timelines, and ensuring that every aspect of a project is accounted for. Their structured approach helps teams stay on track and achieve their goals efficiently.</li>
          <li><strong>Personal Life:</strong> In their personal lives, practical thinkers bring the same level of organization and planning. They are likely to have well-structured schedules, organized homes, and clear plans for achieving their personal goals. Their ability to break down tasks into manageable steps helps them navigate everyday challenges with ease.</li>
        </ul>
        <p className="risk"><strong>Risks:</strong> Practical thinkers may become overly rigid or resistant to change, which can limit their ability to adapt to new situations. Their focus on planning and organization might also lead to overworking and burnout if they do not balance their workload effectively.</p>
      </div>
    );
  } else if (avgPoint.x > 0 && avgPoint.y < 0) {
    quadrantContent = (
      <div className="quadrant">
        <h2>Quadrant C (Relational)</h2>
        <p><strong>Description:</strong> The Relational quadrant focuses on emotional and interpersonal relationships. Those with a preference for relational thinking excel at understanding and connecting with others, making them adept at building and maintaining harmonious relationships.</p>
        <p><strong>Explanation:</strong> Relational thinkers prioritize emotions and kinesthetic experiences. They are empathetic and skilled at recognizing and responding to the emotional needs of others. Their strength lies in their ability to create strong, meaningful connections and foster a supportive environment.</p>
        <p><strong>Impact:</strong></p>
        <ul>
          <li><strong>At Work:</strong> Relational thinkers are crucial in roles that require strong interpersonal skills, such as customer service, counseling, and team leadership. They excel at managing relationships, mediating conflicts, and creating a positive, collaborative work environment. Their empathy and communication skills enable them to connect with colleagues and clients on a deeper level.</li>
          <li><strong>Personal Life:</strong> In their personal lives, relational thinkers value close relationships and emotional connections. They are often the glue that holds social groups and families together, using their empathetic nature to support and nurture those around them. Their ability to listen actively and communicate effectively helps them maintain strong, lasting relationships.</li>
        </ul>
        <p className="risk"><strong>Risks:</strong> Relational thinkers might struggle to maintain professional boundaries, leading to emotional exhaustion. They may also find it challenging to make decisions based solely on facts and logic, which can sometimes be necessary in certain situations.</p>
      </div>
    );
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
      <div className="chart-container">
        <div className="canvas-container">
          <Scatter
            data={data}
            options={options}
            width={100}
            height={100}
            style={{ paddingTop: "10px", paddingRight: "10px" }}
          />
        </div>
      </div>
      <div className="half-page-width">{quadrantContent}</div>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default ResultPage;
