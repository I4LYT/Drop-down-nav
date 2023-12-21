// Create the navigation bar
const navBar = document.createElement('nav');
navBar.classList.add('navbar');

// Create the links
const homeLink = document.createElement('a');
homeLink.href = 'https://www.google.com';
homeLink.textContent = 'Home';

const aboutLink = document.createElement('a');
aboutLink.href = 'https://about.google';
aboutLink.textContent = 'About';

const contactLink = document.createElement('a');
contactLink.href = 'https://contacts.google.com';
contactLink.textContent = 'Contact';

// Add the links to the navigation bar
navBar.appendChild(homeLink);
navBar.appendChild(aboutLink);
navBar.appendChild(contactLink);

// Add the navigation bar to the HTML file
const navContainer = document.querySelector('.nav-container');
navContainer.appendChild(navBar);
