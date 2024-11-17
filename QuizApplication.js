const quizData = [
    {
        question: "CEO of Icreative Technologies?",
        options: ["Mehboob Shar", "Kashif", "Both", "None"],
        answer: "Mehboob Shar"
    },
    {
        question: "Who is Vice Chancellor of Sukkur IBA?",
        options: ["Asim Samejo", "Asim Sheikh", "Meer Muhammad", "None"],
        answer: "Asim Sheikh"
    },
    {
        question: "What is the capital of Pakistan?",
        options: ["Islamabad", "Karachi", "Lahore", "None of these"],
        answer: "Islamabad"
    },
    {
        question: "Which of the following is a famous software company in Pakistan?",
        options: ["Systems Limited", "Google", "Apple", "Facebook"],
        answer: "Systems Limited"
    },
    {
        question: "Which programming language is most commonly used for web development in Pakistan?",
        options: ["JavaScript", "C++", "Python", "Ruby"],
        answer: "JavaScript"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "2+2-2+2?",
        options: ["4", "6", "-4", "0"],
        answer: "0"
    },
    {
        question: "ln(1)=0?",
        options: ["True", "False", "Undefined", "None"],
        answer: "True"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "What does CPU stand for in computer systems?",
        options: ["Central Processing Unit", "Central Programming Unit", "Central Process Unit", "Central Performance Unit"],
        answer: "Central Processing Unit"
    },
    {
        question: "Which of the following is used to style web pages?",
        options: ["HTML", "CSS", "JavaScript", "HTML and CSS"],
        answer: "CSS"
    },
    {
        question: "Which of the following CSS properties is used to change the background color of an element?",
        options: ["background-color", "color", "color-bg", "text-color"],
        answer: "background-color"
    },
    {
        question: "Which of the following is a JavaScript framework for building user interfaces?",
        options: ["React", "Vue", "Angular", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Which CSS property is used to control the layout of a webpage?",
        options: ["display", "float", "position", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Which of the following is a server-side scripting language?",
        options: ["PHP", "JavaScript", "CSS", "HTML"],
        answer: "PHP"
    },
    {
        question: "What does the acronym 'HTTP' stand for?",
        options: ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "Hyper Transfer Text Protocol", "HyperTool Transfer Protocol"],
        answer: "HyperText Transfer Protocol"
    },
    {
        question: "What is the purpose of the 'Z-index' in CSS?",
        options: ["It defines the stacking order of elements", "It changes the background color", "It adds spacing between elements", "It adds borders to elements"],
        answer: "It defines the stacking order of elements"
    },
    {
        question: "Which of the following is used to send data from a web page to a server?",
        options: ["GET", "POST", "PUT", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Which of the following is the main purpose of a 'NoSQL' database?",
        options: ["To store unstructured data", "To store data in tables", "To handle large-scale transactions", "To perform complex queries"],
        answer: "To store unstructured data"
    },
    {
        question: "Which programming language is primarily used for web development on the server-side?",
        options: ["JavaScript", "Python", "Ruby", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Which of the following is the correct syntax to create a function in JavaScript?",
        options: ["function myFunction()", "create function myFunction()", "def myFunction()", "function = myFunction()"],
        answer: "function myFunction()"
    },
    {
        question: "What does the acronym 'API' stand for in web development?",
        options: ["Application Programming Interface", "Applied Programming Interface", "Automated Process Integration", "Application Program Information"],
        answer: "Application Programming Interface"
    },
    {
        question: "What is the default value of the 'position' property in CSS?",
        options: ["static", "relative", "absolute", "fixed"],
        answer: "static"
    },
    {
        question: "Which JavaScript method is used to add an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()"
    },
    {
        question: "Which of the following is used to style HTML elements for mobile devices?",
        options: ["media queries", "flexbox", "CSS Grid", "SASS"],
        answer: "media queries"
    },
    {
        question: "Which university is ranked among the top for Computer Science in Pakistan?",
        options: ["Lahore University of Management Sciences (LUMS)", "COMSATS University", "University of the Punjab", "National University of Sciences and Technology (NUST)"],
        answer: "National University of Sciences and Technology (NUST)"
    },
    {
        question: "Which university is known for having a strong Computer Science department in Pakistan?",
        options: ["FAST-NU", "University of Karachi", "Quaid-i-Azam University", "NED University of Engineering and Technology"],
        answer: "FAST-NU"
    },
    {
        question: "Which university in Pakistan is famous for its Computer Science research and development?",
        options: ["NUST", "LUMS", "COMSATS", "University of Engineering and Technology (UET) Lahore"],
        answer: "LUMS"
    },
    {
        question: "Which of the following is considered a leading Computer Science university in Pakistan?",
        options: ["COMSATS University Islamabad", "Ghulam Ishaq Khan Institute", "University of the Punjab", "Institute of Business Administration (IBA)"],
        answer: "COMSATS University Islamabad"
    }
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

function loadQuiz() {
    quizData.forEach((quizItem, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.id = `question${index}`;
        questionElement.innerHTML = `
            <h2>${index + 1}. ${quizItem.question}</h2>
            <ul class="options">
                ${quizItem.options.map((option, i) => `
                    <li>
                        <input type="radio" name="question${index}" value="${option}" id="q${index}o${i}">
                        <label for="q${index}o${i}">${option}</label>
                    </li>
                `).join('')}
            </ul>
            <div class="feedback" id="feedback${index}"></div> <!-- Feedback div for each question -->
        `;
        quizContainer.appendChild(questionElement);
    });
}

function calculateResults() {
    let score = 0;

    quizData.forEach((quizItem, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        const feedbackElement = document.getElementById(`feedback${index}`);

    
        feedbackElement.innerHTML = '';

        if (selectedOption) {
            if (selectedOption.value === quizItem.answer) {
                feedbackElement.innerHTML = `<span style="color: green;">Correct</span>`;
                score++; 
            } else {
                feedbackElement.innerHTML = `<span style="color: red;">Wrong</span>. The correct answer is: <strong>${quizItem.answer}</strong>`;
            }
        } else {
            feedbackElement.innerHTML = `<span style="color: red;">You did not select an answer</span>`;
        }
    });


    const totalQuestions = quizData.length;
    const percentage = (score / totalQuestions) * 100;
    let feedbackMessage;

    if (percentage === 100) {
        feedbackMessage = "Excellent work! You got all the answers right!";
    } else if (percentage >= 75) {
        feedbackMessage = "Great job! You did really well!";
    } else if (percentage >= 50) {
        feedbackMessage = "Not bad! But there's room for improvement.";
    } else {
        feedbackMessage = "Keep trying! Review the material and try again.";
    }

    resultContainer.innerHTML = `You scored ${score} out of ${totalQuestions}. ${percentage.toFixed(2)}%. <br>${feedbackMessage}`;
}

submitButton.addEventListener('click', calculateResults);

loadQuiz();
