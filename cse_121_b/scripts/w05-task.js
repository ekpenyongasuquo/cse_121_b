/* W05: Programming Tasks */


/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = async (temples) => {
    temples.forEach(temple => {
        var addArticle = document.createElement("article");
        var h3 = document.createElement("h3");
        h3.innerHTML = temple.templeName;
        var img = document.createElement("img");
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.location);

        addArticle.appendChild(h3);
        addArticle.appendChild(img);

        templesElement.appendChild(addArticle);

    });
}



/* async getTemples Function using fetch()*/
const URL = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
let getTemples = async () => {
    let response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const data = await response.json();
    templeList = data;
    displayTemples(templeList);
}

/* reset Function */
async function reset() {
    let erase = await document.getElementById("temples");
    erase.innerHTML = null;
}


/* sortBy Function */
let sortBy = async (listOfTemples) => {
    reset();

    let filter = await document.getElementById("sortBy").value;

    switch (filter) {
        case "utah":
            let utahFilter = listOfTemples.filter(listOfTemples => listOfTemples.location.includes("Utah,"));
            displayTemples(utahFilter);
            break;
        case "notutah":
            let notUtahFilter = listOfTemples.filter(listOfTemples => !listOfTemples.location.includes("Utah,"));
            displayTemples(notUtahFilter);
            break;
        case "older":
            let olderTemples = listOfTemples.filter(newList => new Date(newList.dedicated) < new Date(1950, 0, 1));
            displayTemples(olderTemples);
            break;
        case "all":
            displayTemples(listOfTemples);
            break;
    }
};

getTemples();
/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });