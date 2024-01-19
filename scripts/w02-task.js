/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Joseph Gaunt';
let currentYear = 2024;
let profilePicture = 'images/joseph.JPG';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
textContext = currentYear;
imageElement.setAttribute('src', `${profilePicture}`);
yearElement.innerHTML = `${currentYear}`;
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let foods = ["potatoes", "kitkat", "spaghetti", "steak"];
const secondFood = "pie";
foods.push(secondFood);
foodElement.innerHTML += `<br>${foods}`;
foods.shift();
foodElement.innerHTML += `<br>${foods}`;
foods.pop();
foodElement.innerHTML += `<br>${foods}`;
