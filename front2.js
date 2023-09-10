const questions = [
    {
        question: "Question 1: How do you feel in social situations?",
        options: ["Comfortable", "Anxious", "Neutral"],
    },
    {
        question: "Question 2: How do you handle stress?",
        options: ["Well", "Not well", "Sometimes well"],
    },
    {
        question: "Question 3: How do people think??",
        options: ["Biologically: People think through neural processes in the brain.", "Cognitively: Thinking involves processing information, memory, and problem-solving.", "Socioculturally: Social and cultural factors influence how people think."],
    },
    {
        question: "Question 4: How do children learn to speak??",
        options: ["Imitation", "Language Acquisition Device", "Social Interaction"],
    },
    {
        question: "Question 5: How does our brain work??",
        options: ["Neurotransmission", "Network Connectivity", "Sensory Processing"],
    },
    {
        question: "Question 6: How do human actions come about??",
        options: ["Decision-Making", "Habit and Routine", "External Stimuli"],
    },
    {
        question: "Question 7: How do people perceive their environment??",
        options: ["Sensory Perception", "Cognitive Interpretation", "Emotional and Psychological Filters"],
    },
    {
        question: "Question 8: How do people differ in terms of their personality??",
        options: ["Trait Differences", "Cultural and Environmental Influences", "Genetic Factors"],
    },  
];

const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        let optionsHTML = "";

        question.options.forEach((option, index) => {
            optionsHTML += `
                <label>
                    <input type="radio" name="question${currentQuestion}" value="${index}">
                    ${option}
                </label><br>`;
        });

        quizContainer.innerHTML = `
            <p>${question.question}</p>
            ${optionsHTML}
        `;
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.style.display = "none";
    submitButton.style.display = "none";

  //to show the result // resultContainer.innerHTML = `<p>Your score: ${score} out of ${questions.length}</p>`;

    // You can add logic here to analyze the score and display information about potential disorders.
}

function checkAnswer() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestion}"]:checked`);

    if (!selectedOption) {
        alert("Please select an option.");
        return;
    }

    const answerIndex = parseInt(selectedOption.value);
    if (answerIndex === 0) {
        score++;
    }

    currentQuestion++;
    displayQuestion();
}

submitButton.addEventListener("click", checkAnswer);

displayQuestion();

// script.js
function showMessage() {
    alert('Hello from JavaScript!');
}
