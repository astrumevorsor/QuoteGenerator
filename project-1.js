// Variable names
// Get a reference to the "New Quote" button, quote display, and person display elements
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

// Array of quotes with corresponding persons
const quotes = [
    { person: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
    { person: "Maya Angelou", quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." },
    // ... (other quotes)
    { person: "Vincent van Gogh", quote: "I would rather die of passion than of boredom." }
];

// Add a click event listener to the "New Quote" button
btn.addEventListener('click', function() {
    // Generate a random index within the range of quotes array length
    let random = Math.floor(Math.random() * quotes.length);

    // Set the text content of the quote display to the randomly selected quote
    quote.innerText = quotes[random].quote;

    // Set the text content of the person display to the corresponding person
    person.innerText = quotes[random].person;
});
