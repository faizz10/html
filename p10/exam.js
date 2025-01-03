document.addEventListener("DOMContentLoaded", function () {
    var questions = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "London", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: " is the capital of France?",
            options: ["Paris", "Berlin", "London", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "W the capital of France?",
            options: ["Paris", "Berlin", "London", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the  of France?",
            options: ["Paris", "Berlin", "London", "Madrid"],
            correctAnswer: "Paris"
        },
        // Add more questions as needed
    ];

    var currentQuestionIndex = 0;
    var questionLabel = document.getElementById("question");
    var listElement = document.getElementById("list");

    function createOptions() {
        var currentQuestion = questions[currentQuestionIndex];
        questionLabel.textContent = currentQuestion.question;
        listElement.innerHTML = "";

        currentQuestion.options.forEach(function (option, index) {
            var li = document.createElement("li");
            li.type = "1";
            var button = document.createElement("button");
            button.className = "btn";
            button.textContent = option;
            button.addEventListener("click", function () {
                handleOptionClick(option, button);
            });
            li.appendChild(button);
            listElement.appendChild(li);
        });
    }

    function handleOptionClick(selectedOption, button) {
        var currentQuestion = questions[currentQuestionIndex];

        // Disable all buttons
        var buttons = document.querySelectorAll('.btn');
        buttons.forEach(function (btn) {
            btn.disabled = true;
        });

        // Check if the selected option is correct
        if (selectedOption === currentQuestion.correctAnswer) {
            button.classList.add('correct');
        } else {
            button.classList.add('incorrect');
            // Find the correct answer and highlight it in green
            var correctOptionIndex = currentQuestion.options.indexOf(currentQuestion.correctAnswer);
            buttons[correctOptionIndex].classList.add('correct');
        }

        // Enable the next button after a brief delay
        setTimeout(function () {
            document.getElementById("nextbtn").disabled = false;
        }, 1000); // Adjust the delay time as needed
    }

    function nextQuestion() {
        // Move to the next question
        currentQuestionIndex++;

        // Check if there are more questions
        if (currentQuestionIndex < questions.length) {
            // Enable all buttons for the new question
            var buttons = document.querySelectorAll('.btn');
            buttons.forEach(function (btn) {
                btn.disabled = false;
                btn.classList.remove('correct', 'incorrect'); // Remove previous highlighting
            });

            createOptions();
            document.getElementById("nextbtn").disabled = true;
        } else {
            // Quiz completed logic
            displayCompletionMessage();
        }
    }

    function displayCompletionMessage() {
        questionLabel.textContent = "Quiz completed!";
        listElement.innerHTML = "";
        document.getElementById("nextbtn").style.display = "none"; // Hide the next button
    }

    createOptions();

    document.getElementById("nextbtn").addEventListener("click", nextQuestion);
});
