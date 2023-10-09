const quotes = [
    "\"The only way to do great work is to love what you do.\" - Steve Jobs",
    "\"In three words I can sum up everything I've learned about life: it goes on.\" - Robert Frost",
    "\"The only thing we have to fear is fear itself.\" - Franklin D. Roosevelt",
    "\"Success is not final, failure is not fatal: It is the courage to continue that counts.\" - Winston Churchill",
    "\"The greatest glory in living lies not in never falling, but in rising every time we fall.\" - Nelson Mandela",
    "\"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.\" - Ralph Waldo Emerson",
    "\"The only limit to our realization of tomorrow will be our doubts of today.\" - Franklin D. Roosevelt",
    "\"The best way to predict the future is to create it.\" - Peter Drucker",
    "\"In the end, we will remember not the words of our enemies, but the silence of our friends.\" - Martin Luther King Jr.",
    "\"Life is what happens when you're busy making other plans.\" - John Lennon"
];

const quote = document.querySelector('#quote-text');
const button = document.querySelector('#button');

function displayRandomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const randomquote = quotes[randomNumber];
    quote.innerHTML = randomquote;
}

button.addEventListener('click', displayRandomQuote);

displayRandomQuote();
