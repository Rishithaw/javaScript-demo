const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'htps://www.thenetninjs.co.uk');
link.innerText = 'The Net Ninja Website';

const msg = document.querySelector('p');

console.log(msg.getAttribute('class'));
msg.setAttribute('class', 'success');
msg.setAttribute('style', 'color: green');
