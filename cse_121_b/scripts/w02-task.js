

//const fullName = 'Ekpenyong Mfon';

//document.querySelector('#name').textContent = fullName;

//const currentYear = Date();

//const profilePicture = 'images/placeholder.jpg';

//document.querySelector('img').setAttribute('src', profilePicture);


/* Step 2 - Variables */
let fullName = "Ekpenyong Mfon";
const today = new Date();
const currentYear = today.toLocaleDateString("en-En", {
  year: "numeric",
});
let profilePicture = 'images/mfon.jpg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.getElementsByTagName("img")


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement[0].src = ` ${profilePicture}`;





/* Step 5 - Array */

const myfoodElement = ['Afang Soup', 'Melon Soup', 'Okro Soup'];
foodElement.innerHTML += `<br>${myfoodElement}`;
const anotherFood = "Joloff Rice"
myfoodElement.push(anotherFood);
foodElement.innerHTML += `<br>${myfoodElement}`;
myfoodElement.shift();
foodElement.innerHTML += `<br>${myfoodElement}`;
myfoodElement.pop();
foodElement.innerHTML += `<br>${myfoodElement}`;



/* ARRAYS */



// Step 1: declare and instantiate an array variable to hold your favorite foods
//const myfoodElement = ['Afang Soup', 'Melon Soup', 'Okro Soup'];

// Step 2: place the values of the favorite foods variable into the HTML file
//document.querySelector('#food').textContent = myfoodElement;

// Step 3: declare and instantiate a variable to hold another favorite food
//const anotherFood = 'Joloff Rice';

// Step 4: add the variable holding another favorite food to the favorite food array
//myfoodElement.push(anotherFood);

// Step 5: repeat Step 2
//document.querySelector('#food').textContent = myfoodElement;

// Step 6: remove the first element in the favorite foods array
//myfoodElement.shift();

// Step 7: repeat Step 2
//document.querySelector('#food').textContent = myfoodElement;

// Step 8: remove the last element in the favorite foods array
//myfoodElement.pop();









