let currentQuestion = 0;
const questions = [
    {
        question: "Wat is de laag die de fysieke hardware van een computer beheert?",
        options: ["A. Applicaties", "B. Besturingssysteem", "C. Fysieke laag", "D. Netwerklaag"],
        answer: "C"
    },
    {
        question: "Welke laag beheert de interactie tussen de gebruiker en de applicaties?",
        options: ["A. Hardwarelaag", "B. Besturingssysteem", "C. Applicatielaag", "D. Netwerklaag"],
        answer: "C"
    },
    {
        question: "Welke laag maakt communicatie mogelijk tussen verschillende apparaten in een netwerk?",
        options: ["A. Fysieke laag", "B. Besturingssysteem", "C. Netwerklaag", "D. Applicatielaag"],
        answer: "C"
    },
    {
        question: "Welke laag heeft direct contact met de hardware van een computer?",
        options: ["A. Toepassingen", "B. Besturingssysteem", "C. Fysieke laag", "D. Netwerklaag"],
        answer: "C"
    }
];

function displayQuestion() {
    const questionObj = questions[currentQuestion];
    document.querySelector(".question h2").textContent = questionObj.question;
    const options = document.querySelectorAll(".options button");
    options.forEach((button, index) => {
        button.textContent = questionObj.options[index];
    });
    document.getElementById("feedback").textContent = "";
    document.getElementById("nextButton").style.display = "none";
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestion].answer;
    const feedback = document.getElementById("feedback");

    if (selectedAnswer === correctAnswer) {
        feedback.textContent = "Correct! Goed gedaan.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Helaas, dat is niet correct. Probeer het opnieuw.";
        feedback.style.color = "red";
    }
    
    document.getElementById("nextButton").style.display = "inline-block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        document.querySelector(".container").innerHTML = "<h2>Je hebt het spel voltooid! Goed gedaan!</h2>";
    }
}

window.onload = displayQuestion;
