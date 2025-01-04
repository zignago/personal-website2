// JavaScript to dynamically create the website content
const container = document.createElement('div');
container.className = 'container';

const divider = document.createElement('div');
divider.className = 'divider';

const heading = document.createElement('h1');
heading.textContent = 'Gian Zignago';

const paragraph1 = document.createElement('p');
paragraph1.innerHTML = 'Software Engineer at Cisco Meraki<br>08.2023 - 09.2024';

const paragraph2 = document.createElement('p');
paragraph2.textContent = 'Previous internships at Cisco Meraki, Johns Hopkins APL, MITRE';

const paragraph3 = document.createElement('p');
paragraph3.innerHTML = 'M.S. in Computer Science, UCLA<br>12.2024';

const paragraph4 = document.createElement('p');
paragraph4.innerHTML = 'B.S. in Computer Science, University of Missouri<br>12.2024';

divider.appendChild(heading);
divider.appendChild(paragraph1);
divider.appendChild(paragraph2);
divider.appendChild(paragraph3);
divider.appendChild(paragraph4);

container.appendChild(divider);
document.body.appendChild(container);
