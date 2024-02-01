/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Joseph Gaunt",
    photo: "images/joseph.JPG",
    favoriteFodds: [
        'potatoes',
        'kitkat',
        'spaghetti',
        'steak'
    ],
    hobbies:[
        'Gaming',
        'Watching YouTube',
        'Working on all things technology',
        'Building computers'
    ],
    placesLived: [],
};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Orem, UT',
        length: '20 years'
    },
    {
        place: 'Rexburg, ID',
        length: '2 years'
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo;
document.getElementById('photo').alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFodds.forEach(food =>{
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby =>{
    let ul = document.createElement('ul');
    ul.textContent = hobby;
    document.querySelector('#hobbies').appendChild(ul);
});

/* Places Lived DataList */
function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
};
const placesElement = document.querySelector('#places-lived');
function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
};
placesElement.innerHTML = generateListMarkup(
    myProfile.placesLived,
    placesTemplate
);