export { askName, askQuestions, countsAsAYes, changeColors };

function askName(name) {
    const firstName = prompt('What is your first name?');
    const lastName = prompt('What is your last name?');
    name = `${firstName} ${lastName}`;
    return name;
}

function countsAsAYes(answer) {
    return answer.charAt(0).toLowerCase() === 'y' ? true : false;
}

function changeColors(display, thisManyCorrect) {
    if (thisManyCorrect === 3) {
        display.classList.add('green');
    } else if (thisManyCorrect === 2) {
        display.classList.add('yellow');
    } else {
        display.classList.add('red');
    }
}
function askQuestions() {
    let numCorrect = 0;
    let question1 = prompt('Was Silky directly succeeded by Cheedy?');

    if (!countsAsAYes(question1)){
        console.log('q1 ' + !countsAsAYes(question1));
        numCorrect++;
    }
    let question2 = prompt('Was Silky originally purchased at the Vancouver aquarium?');
    if (!countsAsAYes(question2)){
        console.log('q2 ' + !countsAsAYes(question2));
        numCorrect++;
    }
    let question3 = prompt('During her appearance in Space Lake 2, does Silky risk her life to save Lake from the tyrannosaurus rex?');
    if (countsAsAYes(question3)){
        numCorrect++;
    }
    return numCorrect;
}
