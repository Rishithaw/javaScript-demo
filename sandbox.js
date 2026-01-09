// arguments & parameters
const speak = function(name = 'luigi', time = 'day') {
    console.log(`Good ${time} ${name}`);
}

speak();
speak("John");