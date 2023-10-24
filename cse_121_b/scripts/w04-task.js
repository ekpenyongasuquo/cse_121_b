/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Ekpenyong Mfon',
    photo: "images/mfon.jpg",
    favoriteFood: [
        'Afang Soup',
        'Jollof Rice',
        'Melon Soup',
        'Akpak Soup'
    ],
    hobbies: [
        'Reading',
        'Solving Mathematics',
        'Wacting Movies'
    ]

};




/* Populate Profile Object with placesLive objects */

myProfile.placesLived = [
    {
        place: 'Calabar, Cross River State, Nigeria',
        length: '23 years'
    },

    {
        place: 'Iwo, Osun State, Nigeria',
        length: '2 years'
    },

    {
        place: 'Kano, Kano State, Nigeria',
        length: '1 year'
    }

]

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);

document.querySelector('#photo').setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFood.forEach((food) => {
    let favoriteFoodElem = document.createElement('li');
    favoriteFoodElem.textContent = food;

    // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
    document.querySelector('#favorite-foods').appendChild(favoriteFoodElem);
});

/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
    let hobbyElem = document.createElement('li');
    hobbyElem.textContent = hobby;

    // Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
    document.querySelector('#hobbies').appendChild(hobbyElem);
});


/* Places Lived DataList */

myProfile.placesLived.forEach((placeLived) => {
    let placesLivedPlace = document.createElement('dt');
    placesLivedPlace.textContent = placeLived.place;

    document.querySelector('#places-lived').appendChild(placesLivedPlace);

    let placesLivedLength = document.createElement('dd');
    placesLivedLength.textContent = placeLived.length;

    // Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

    document.querySelector('#places-lived').appendChild(placesLivedLength);
})
