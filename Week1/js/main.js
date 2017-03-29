let spyArray = [];

let map;
let marker;

function initMap() {
    const uluru = {lat: -25.363, lng: 131.044};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

const makeCards = () => {
    "use strict";
    const cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML = '';

    //creates cards for each spy and inserts the card to the card container
    spyArray.forEach(spy => {
        "use strict";
        const card = document.createElement('div');
        card.setAttribute('class', 'col-md-4');
        card.innerHTML =
            `<div class="card">
                <img class="card-img-top" src="${spy.thumbnail}" alt="Card image cap">
                <div class="card-block">
                    <h4 class="card-title">${spy.title}</h4>
                    <p class="card-text">${spy.details}</p>
                    <p class="date">${spy.time}</p>
                    <button type="button" class="btn btn-primary" data-id="${spy.id}">View</a>
                </div>
            </div>`;

        card.addEventListener('click', () => {
            document.querySelector('.modal-body img').src = spy.thumbnail;
            document.querySelector('.modal-title').innerHTML = spy.title;
            $('#modal').modal('show');
            setTimeout(() => {
                google.maps.event.trigger(map, 'resize');
                map.setCenter(spy.coordinates);
                map.setZoom(8);
                marker.setPosition(spy.coordinates);
            },
                500
            );
        });
        cardContainer.appendChild(card);
    });
}

//sort the image according to date
const sortbytime = () => {
    spyArray.sort((a, b) => a.time < b.time ? -1 : 1);
    makeCards();
};

//. for class, # for id
document.querySelector('#sortBtn').onclick = sortbytime;


// use fetch & make function short

// $.ajax('https://gist.githubusercontent.com/mrbeva7/b7e303086cc5442b4f86aedfe0b9509c/raw/59f88532d8476fb2bd41c820345e435bfc9dbc52/spyArray.json').done(data => {
//     spyArray = JSON.parse(data);
//     makeCards();
// });

fetch('https://gist.githubusercontent.com/mrbeva7/b7e303086cc5442b4f86aedfe0b9509c/raw/59f88532d8476fb2bd41c820345e435bfc9dbc52/spyArray.json')
    .then(response => response.json())
    .then(data => spyArray = data)
    .then(makeCards);


