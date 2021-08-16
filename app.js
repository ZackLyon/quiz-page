// import functions and grab DOM elements
import { askName, askQuestions, changeColors } from './utils.js';
// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  // - DOM elements for button, reset button, and results
const subBtn = document.getElementById('sub-btn');
const resetBtn = document.getElementById('reset-btn');
const results = document.getElementById('results');

  // - Counter variables for how many correct answers in current quiz and for quiz sessions: times pass, fail, taken
let timesPassed = 0;
let timesFailed = 0;
let timesTaken = 0;

  // - Function countsAsAYes that takes in answer parameter and returns boolean

  // - If statements to evaluate answers and increment correct answer counter as appropriate
  // - Confirm, prompt, and alert pop-ups to solicit user input and store it in associated variables:
subBtn.addEventListener('click', () => {
    const fullName = askName();
    let takeQuiz = confirm('Do you want to take the Silky trivia quiz?');
    if (!takeQuiz){return;}
    let correctAns = askQuestions();
    alert(`Thank you for taking the quiz! You're results are about to be published.`);
    changeColors(results, correctAns);
    results.classList.remove('hidden');
    results.textContent = `Hello, ${fullName}! You got ${correctAns} out of 3 questions correct.`;
    
});
  //     - Prompt first name
  //     - Prompt last name
  //     - Confirm that user wants to take test / return if not
  //     - 3 prompts with yes or no questions
  //     - Alert the user that quiz is complete and results are forthcoming
  // - Display results using DOM element and attaching appropriate class

  // - Reset button clears results area, sets correct counter to zero, removes color class