
// Quadrant A (Upper Left): Analytical thinking (logical, factual): X=-1, Y=1
// Quadrant B (Lower Left): Organizational thinking (sequential, planned), X=-1, Y=-1
// Quadrant C (Lower Right): Interpersonal thinking (emotional, kinesthetic), X=1, Y=-1
// Quadrant D (Upper Right): Imaginative thinking (holistic, intuitive), X=1, Y=1


const questions = [
  {
    question: "I rely more on my instinct than on factual data?",
    answers: [
      { text: "Rather no", effect: { x: -1, y: 0 } }, // A/B
      { text: "Rather yes", effect: { x: 1, y: 0 } }, // C/D
    ],
  },
  {
    question:
      "Do I prefer making decisions based on detailed reports over gut feelings?",
    answers: [
      { text: "Yes, I prefer reports", effect: { x: -1, y: -0.5 } }, // A/B, more B
      { text: "No, I trust my gut", effect: { x: 1, y: 1 } }, // D
    ],
  },
  {
    question: "Is having a clear agenda for meetings important to me?",
    answers: [
      { text: "Yes, very important", effect: { x: -1, y: -1 } }, // Clearly B
      { text: "No, it's flexible", effect: { x: 1, y: -0.5 } }, //C/D more C
    ],
  },
  {
    question: "Do I value teamwork over individual work?",
    answers: [
      { text: "Yes, teamwork is key", effect: { x: 1, y: -1 } }, // Clearly C
      { text: "No, I work better alone", effect: { x: -1, y: 0 } }, // Clearly A/B
    ],
  },
  {
    question: "Do I often find myself daydreaming about future possibilities?",
    answers: [
      { text: "Often", effect: { x: 1, y: 1 } }, // Clearly D
      { text: "Rarely", effect: { x: -1, y: 1 } }, // Clearly A
    ],
  },
  {
    question:
      "Do I think that a balanced approach to problem-solving involves both logic and creativity?",
    answers: [
      { text: "Yes, both are necessary", effect: { x: 0, y: 0 } },
      { text: "No, one usually dominates", effect: { x: 1, y: 0 } },
    ],
  },
  {
    question:
      "How important is it to quantify outcomes from a meeting or discussion?",
    answers: [
      { text: "Very important, I need metrics", effect: { x: -1, y: 0.5 } }, // Clearly A, a bit B
      { text: "Not important, feelings are enough", effect: { x: 1, y: -1 } }, 
    ],
  },
  {
    question:
      "Do I find comfort in following established procedures and routines?",
    answers: [
      { text: "Yes, they offer predictability", effect: { x: -1, y: -1 } }, // Clearly B
      { text: "No, I prefer spontaneity", effect: { x: 1, y: 1 } }, // Clearly D
    ],
  },
  {
    question:
      "Is empathizing with others' feelings a key factor in my decision-making process?",
    answers: [
      { text: "Absolutely, it guides me", effect: { x: 1, y: -1 } }, // Clearly C
      { text: "Rarely, I focus on facts", effect: { x: -1, y: 1 } }, // Clearly A
    ],
  },
  {
    question:
      "Do I believe that innovation requires breaking established norms?",
    answers: [
      {
        text: "Yes, innovation can't be bound by norms",
        effect: { x: 1, y: 1 }, // Clearly D
      },
      { text: "No, norms are there for a reason", effect: { x: -1, y: -1 } }, // Clearly B
    ], 
  },
  {
    question:
      "When faced with a complex problem, do I prefer to analyze data or brainstorm creative solutions?",
    answers: [
      { text: "Analyze data", effect: { x: -1, y: 1 } }, // Clearly A
      { text: "Brainstorm solutions", effect: { x: 1, y: 1 } }, // Clearly D
    ],
  },
  {
    question: "Do I rely on strategic frameworks or intuitive insights for making critical decisions?",
    answers: [
      { text: "Strategic frameworks", effect: { x: -1, y: 1 } }, // Analytical
      { text: "Intuitive insights", effect: { x: 1, y: 1 } }, // Imaginative
    ],
  },
  {
    question: "Which is more appealing to me: detailed charts and graphs or compelling stories and visuals?",
    answers: [
      { text: "Charts and graphs", effect: { x: -1, y: 1 } }, // Analytical
      { text: "Stories and visuals", effect: { x: 1, y: 1 } }, // Imaginative
    ],
  },
  {
    question: "How do I respond to unexpected changes at work?",
    answers: [
      { text: "With careful analysis and planning", effect: { x: -1, y: -1 } }, // Organizational
      { text: "Embrace change enthusiastically", effect: { x: 1, y: -1 } }, // Interpersonal
    ],
  },
  {
    question: "In a dispute, am I more likely to seek a consensus or stand by my decision?",
    answers: [
      { text: "Seek consensus", effect: { x: 1, y: -1 } }, // Interpersonal
      { text: "Stand by my decision", effect: { x: -1, y: 1 } }, // Analytical
    ],
  },
  {
    question: "Do I prefer structured learning environments or exploratory learning sessions?",
    answers: [
      { text: "Structured environments", effect: { x: -1, y: -1 } }, // Organizational
      { text: "Exploratory sessions", effect: { x: 1, y: 1 } }, // Imaginative
    ],
  },
  {
    question: "When solving a problem, do I prefer logical reasoning or a creative brainstorm?",
    answers: [
      { text: "Logical reasoning", effect: { x: -1, y: 1 } }, // Analytical
      { text: "Creative brainstorm", effect: { x: 1, y: 1 } }, // Imaginative
    ],
  },
  {
    question: "Do I thrive in a structured, orderly environment or a dynamic, flexible environment?",
    answers: [
      { text: "Structured and orderly", effect: { x: -1, y: -1 } }, // Organizational
      { text: "Dynamic and flexible", effect: { x: 1, y: 1 } }, // Imaginative
    ],
  },
  {
    question: "In team projects, do I often take the role of the coordinator or the innovator?",
    answers: [
      { text: "Coordinator", effect: { x: -1, y: -1 } }, // Organizational
      { text: "Innovator", effect: { x: 1, y: 1 } }, // Imaginative
    ],
  },
  {
    question: "Am I adaptable to social situations or do I maintain a consistent approach regardless of the setting?",
    answers: [
      { text: "Adaptable", effect: { x: 1, y: -1 } }, // Interpersonal
      { text: "Consistent approach", effect: { x: -1, y: 1 } }, // Analytical
    ],
  },
  {
    question: "Do I prefer direct, factual feedback or constructive, empathetic feedback?",
    answers: [
      { text: "Direct, factual", effect: { x: -1, y: 1 } }, // Analytical
      { text: "Constructive, empathetic", effect: { x: 1, y: -1 } }, // Interpersonal
    ],
  },
    
];

export default questions;
