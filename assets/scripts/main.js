// Create the main container
const container = document.createElement('div');
container.className = 'container';

// Add the image
const image = document.createElement('img');
image.src = 'assets/images/DSC02772-3.jpg'; // Path to the image
image.alt = 'Gian Zignago';
image.className = 'profile-image'; // Add a class for styling

// Create the overlay
const overlay = document.createElement('div');
overlay.className = 'overlay';
overlay.innerHTML = '<b>Gian Zignago</b> is a software engineer<br>focused on networks and scalability';

// Create the text container (divider)
const divider = document.createElement('div');
divider.className = 'divider';

// Add the paragraphs
const paragraph1 = document.createElement('p');
paragraph1.innerHTML = 'Software Engineer at Cisco Meraki<br>08.2023 - 09.2024';

const paragraph2 = document.createElement('p');
paragraph2.textContent = 'Previous internships at Cisco Meraki, Johns Hopkins APL, MITRE';

const paragraph3 = document.createElement('p');
paragraph3.innerHTML = 'M.S. in Computer Science, UCLA<br>12.2024';

const paragraph4 = document.createElement('p');
paragraph4.innerHTML = 'B.S. in Computer Science, University of Missouri<br>12.2024';

// Append the text elements to the divider
divider.appendChild(heading);
divider.appendChild(paragraph1);
divider.appendChild(paragraph2);
divider.appendChild(paragraph3);
divider.appendChild(paragraph4);

// Append the image, overlay, and divider to the container
container.appendChild(image);
container.appendChild(overlay); // Add overlay on top of the image
container.appendChild(divider);

// Append the container to the body
document.body.appendChild(container);
