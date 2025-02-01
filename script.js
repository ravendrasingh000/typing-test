const textBox = document.getElementById("text-box");
const inputBox = document.getElementById("input-box");
const startBtn = document.getElementById("start-btn");
const howManyNum = document.getElementById("howManyNum");
const resultBox = document.querySelector(".result-box");
const typingSpeedElement = document.querySelector(".typing-speed");
const netSpeedElement = document.querySelector(".net-speed");
const startAgainBtn = document.getElementById("start-again");
const container = document.querySelector(".container");

let wordsArray = [];
let startTime;
let totalWords = 0;
let typedCorrectly = 0;

// Helper function to generate random words
function generateRandomWords(count) {
  const wordList = [
    "apple",
    "banana",
    "cat",
    "dog",
    "elephant",
    "frog",
    "grape",
    "house",
    "ice",
    "jungle",
    "kite",
    "apple",
    "banana",
    "cat",
    "dog",
    "elephant",
    "frog",
    "grape",
    "house",
    "ice",
    "jungle",
    "kite",
    "lion",
    "monkey",
    "night",
    "orange",
    "piano",
    "queen",
    "rose",
    "snake",
    "train",
    "umbrella",
    "vase",
    "water",
    "xylophone",
    "yacht",
    "zebra",
    "programming",
    "challenge",
    "javascript",
    "developer",
    "project",
    "internet",
    "typing",
    "speed",
    "test",
    "software",
    "keyboard",
    "language",
    "debugging",
    "performance",
    "function",
    "variable",
    "algorithm",
    "design",
    "experience",
    "interface",
    "application",
    "framework",
    "library",
    "syntax",
    "coding",
    "runtime",
    "execution",
    "method",
    "process",
    "iteration",
    "loop",
    "constant",
    "object",
    "array",
    "string",
    "integer",
    "boolean",
    "conditional",
    "logic",
    "comparison",
    "dynamic",
    "static",
    "prototype",
    "inheritance",
    "encapsulation",
    "abstraction",
    "polymorphism",
    "class",
    "constructor",
    "module",
    "package",
    "dependency",
    "testing",
    "debugger",
    "workflow",
    "repository",
    "version",
    "control",
    "commit",
    "branch",
    "merge",
    "pull",
    "push",
    "database",
    "query",
    "schema",
    "table",
    "record",
    "field",
    "primary",
    "key",
    "foreign",
    "index",
    "optimization",
    "deployment",
    "hosting",
    "cloud",
    "server",
    "client",
    "response",
    "request",
    "endpoint",
    "API",
    "authentication",
    "authorization",
    "session",
    "cookie",
    "token",
    "encryption",
    "security",
    "firewall",
    "proxy",
    "frontend",
    "backend",
    "fullstack",
    "responsive",
    "design",
    "mobile",
    "desktop",
    "compatibility",
    "cross-browser",
    "debugging",
    "performance",
    "benchmark",
    "scalability",
    "load",
    "balancing",
    "event",
    "listener",
    "callback",
    "promise",
    "async",
    "await",
    "thread",
    "process",
    "concurrency",
    "parallel",
    "execution",
    "middleware",
    "pipeline",
    "route",
    "controller",
    "view",
    "model",
    "template",
    "render",
    "state",
    "lifecycle",
    "hook",
    "context",
    "provider",
    "consumer",
    "store",
    "action",
    "reducer",
    "dispatch",
    "effect",
    "ref",
    "keyframe",
    "animation",
    "transition",
    "media",
    "query",
    "grid",
    "flexbox",
    "alignment",
    "spacing",
    "margin",
    "padding",
    "border",
    "radius",
    "shadow",
    "background",
    "color",
    "gradient",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
    "element",
    "attribute",
    "selector",
    "specificity",
    "inheritance",
    "cascading",
    "DOM",
    "manipulation",
    "event",
    "binding",
    "listener",
    "handler",
    "capture",
    "bubbling",
    "prevent",
    "default",
    "stop",
    "propagation",
    "clone",
    "append",
    "remove",
    "replace",
    "create",
    "fragment",
    "document",
    "window",
    "navigator",
    "history",
    "location",
    "lion",
    "monkey",
    "night",
    "orange",
    "piano",
    "queen",
    "rose",
    "snake",
    "train",
    "umbrella",
    "vase",
    "water",
    "xylophone",
    "yacht",
    "zebra",
  ];
  let selectedWords = [];
  for (let i = 0; i < count; i++) {
    selectedWords.push(wordList[Math.floor(Math.random() * wordList.length)]);
  }
  return selectedWords;
}

// Start test function
startBtn.addEventListener("click", () => {
  const wordCount = parseInt(howManyNum.value, 10);
  if (isNaN(wordCount)) {
    alert("Please select a valid word count!");
    return;
  }

  // Disable Start button and Select dropdown
  startBtn.disabled = true;
  howManyNum.disabled = true;

  wordsArray = generateRandomWords(wordCount);
  textBox.textContent = wordsArray.join(" ");
  totalWords = wordCount;
  inputBox.value = "";
  inputBox.disabled = false;
  startTime = new Date().getTime();
  inputBox.focus();
});

// Calculate results when user completes typing
inputBox.addEventListener("input", () => {
  const typedText = inputBox.value.trim();
  const typedWords = typedText.split(" ");

  if (
    typedWords.length === totalWords &&
    typedWords.every((word, i) => word === wordsArray[i])
  ) {
    const endTime = new Date().getTime();
    const timeTaken = (endTime - startTime) / 1000; // in seconds
    const typingSpeed = Math.round((totalWords / timeTaken) * 60);
    const netSpeed = Math.round((typedCorrectly / timeTaken) * 60);

    // Update result box
    typingSpeedElement.innerHTML = `${typingSpeed} <br><p>WPM</p>`;
    netSpeedElement.innerHTML = `${netSpeed} <br><p>WPM</p>`;

    // Display result box
    container.style.display = "none";
    resultBox.hidden = false;
  } else {
    // Count correct words so far
    typedCorrectly = typedWords.reduce(
      (count, word, i) => (word === wordsArray[i] ? count + 1 : count),
      0
    );
  }
});

// Restart the test
startAgainBtn.addEventListener("click", () => {
  resultBox.hidden = true;
  container.style.display = "flex";
  textBox.textContent = "Select as many words as you want to write...";
  inputBox.value = "";
  inputBox.disabled = true;

  // Re-enable Start button and Select dropdown
  startBtn.disabled = false;
  howManyNum.disabled = false;
});
