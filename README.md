## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.



- Create a HTML file with:
    - A Header with the title
    - Image of subject
    - Paragraphs describing subject
        - A definition tag to explain term
    - Two images of ancillary characters
    - Button to take quiz

- Create a JS file with:
    - DOM elements for button, reset button, and results
    - Counter variables for how many correct answers in current quiz and for quiz sessions: times pass, fail, taken
    - Function countsAsAYes that takes in answer parameter and returns boolean
    - If statements to evaluate answers and increment correct answer counter as appropriate
    - Confirm, prompt, and alert pop-ups to solicit user input and store it in associated variables:
        - Prompt first name
        - Prompt last name
        - Confirm that user wants to take test / return if not
        - 3 prompts with yes or no questions
        - Alert the user that quiz is complete and results are forthcoming
    - Display results using DOM element and attaching appropriate class
    - Reset button clears results area, sets correct counter to zero, removes color class

- Create a CSS file with:
    - button styling
    - header styling
    - font family for whole page
    - class to visually enhance results (green class = good, red class = bad)

- Validation
    - check that buttons work with console.log right after creation
    - check that prompts/confirms are storing answers by console.log of associated variable
    - Create test: test various combinations of correct and false answers and compare them against expected results