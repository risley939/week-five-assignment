// ===================================
// Part 1: JavaScript Basics
// ===================================

// Demonstrate variables, data types, and a conditional.
let userAge = 25;
let minimumVotingAge = 18;
let canVote = false;

// Using an if/else conditional
if (userAge >= minimumVotingAge) {
    canVote = true;
} else {
    canVote = false;
}

// Display the result on the webpage
const part1Output = document.getElementById('part1-output');
part1Output.textContent = `The user is ${userAge} years old. Can they vote? ${canVote ? 'Yes' : 'No'}.`;

console.log('Part 1 Output:', part1Output.textContent);


// ===================================
// Part 2: Functions
// ===================================

// Function 1: Calculates the total bill with a tip.
function calculateTotal(billAmount, tipPercentage) {
    const tipAmount = billAmount * tipPercentage;
    const total = billAmount + tipAmount;
    return total.toFixed(2); // Return a string with 2 decimal places
}

// Function 2: Displays the result on the page.
function displayResult() {
    const bill = 50;
    const tip = 0.15; // 15% tip
    const finalTotal = calculateTotal(bill, tip);
    const part2Output = document.getElementById('part2-output');
    part2Output.textContent = `For a bill of $${bill}, with a ${tip * 100}% tip, the total is $${finalTotal}.`;

    console.log('Part 2 Output:', part2Output.textContent);
}

// Attach the function to a button click event (Part 4 deliverable)
document.getElementById('calculate-total-btn').addEventListener('click', displayResult);


// ===================================
// Part 3: Loops
// ===================================

// Example 1: A simple for loop for a countdown.
function startCountdown() {
    const countdownOutput = document.getElementById('part3-output');
    countdownOutput.innerHTML = ''; // Clear previous content

    for (let i = 5; i >= 1; i--) {
        const countdownItem = document.createElement('p');
        countdownItem.textContent = `Countdown: ${i}`;
        countdownOutput.appendChild(countdownItem);
    }
    const finishedItem = document.createElement('p');
    finishedItem.textContent = "Done!";
    countdownOutput.appendChild(finishedItem);
}

// Example 2: Looping through an array
const fruits = ['Apple', 'Banana', 'Cherry'];
console.log('Part 3 Loop (Array):');
fruits.forEach(fruit => {
    console.log(`- I love ${fruit}.`);
});

// Attach the countdown function to a button (Part 4 deliverable)
document.getElementById('countdown-btn').addEventListener('click', startCountdown);


// ===================================
// Part 4: DOM Manipulation
// ===================================

// DOM Interaction 1: Change text content on click.
const domButton = document.getElementById('dom-btn');
domButton.addEventListener('click', () => {
    // DOM Interaction 2: Change a class to modify styles.
    domButton.classList.toggle('changed');
    
    // Check if the button has the "changed" class to set text.
    if (domButton.classList.contains('changed')) {
        domButton.textContent = 'Color Changed!';
    } else {
        domButton.textContent = 'Click Me!';
    }

    // DOM Interaction 3: Change the content of another element.
    const domText = document.getElementById('dom-text');
    domText.textContent = "This paragraph's content has been updated by JavaScript!";
});