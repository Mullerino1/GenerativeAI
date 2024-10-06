const questions = [
    {
        question: "Which model is known for its multi-modal capabilities?",
        choices: ["Perplexity AI", "Gemini AI", "Claude AI", "Bard AI"],
        answer: "Gemini AI"
    },
    {
        question: "Which AI model is developed by OpenAI?",
        choices: ["Claude AI", "Bard AI", "ChatGPT", "Gemini AI"],
        answer: "ChatGPT"
    },
    {
        question: "What is GitHub Copilot primarily used for?",
        choices: ["Creative Writing", "Code Suggestions", "Image Recognition", "Data Analysis"],
        answer: "Code Suggestions"
    }
];

let currentQuestion = 0;


function showQuestion() {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    choicesElement.innerHTML = "";

    questionElement.textContent = questions[currentQuestion].question;

    questions[currentQuestion].choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.onclick = () => checkAnswer(choice);
        choicesElement.appendChild(button);
    });
}

function checkAnswer(selected) {
    const resultElement = document.getElementById('result');
    if (selected === questions[currentQuestion].answer) {
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Wrong!";
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        resultElement.textContent += " Quiz Finished!";
        document.getElementById('submit').style.display = 'none';
    }
}

document.getElementById('submit').addEventListener('click', showQuestion);
showQuestion();

document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const commentText = document.getElementById('comment-text').value;
    if (commentText.trim() !== "") {
        const commentSection = document.getElementById('comment-section');
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `<p><strong>You:</strong> ${commentText}</p>`;
        commentSection.insertBefore(newComment, commentSection.firstChild);
        document.getElementById('comment-text').value = "";
    }
});
