let shows__array = [
    {
        "date": "Mon Dec 17 2018",
        "venue": "Ronald Lane",
        "location": "San Francisco, CA"
    },

    {
        "date": "Tue Jul 18 2019",
        "venue": "Pier 3 East",
        "location": "San Francisco, CA"
    },

    {
        "date": "Fri Jul 2019",
        "venue": "View Loungue",
        "location": "San Francisco, CA"
    },

    {
        "date": "Sat Aug 12 2019",
        "venue": "Hyatt Agency",
        "location": "San Francisco, CA"
    },

    {
        "date": "Fri Sep 05 2019",
        "venue": "Moscow Center",
        "location": "San Francisco, CA"
    },

    {
        "date": "Wed Aug 11 2019",
        "venue": "Pres Club",
        "location": "San Francisco, CA"
    }
];

function displayShow(showObj) {
    let shows__card = document.createElement("div");
    shows__card.className = "shows__card";

    let shows__dateText = document.createElement("p");
    shows__dateText.innerText = "DATE";
    shows__dateText.className = "shows__heading";
    shows__card.appendChild(shows__dateText);

    let shows__date = document.createElement("h3");
    shows__date.innerText = showObj["date"];
    shows__card.appendChild(shows__date);

    let shows__venueText = document.createElement("p");
    shows__venueText.innerText = "VENUE";
    shows__venueText.className = "shows__heading";
    shows__card.appendChild(shows__venueText);

    let shows__venue = document.createElement("p");
    shows__venue.innerText = showObj["venue"];
    shows__card.appendChild(shows__venue);

    let shows__locationText = document.createElement("p");
    shows__locationText.innerText = "LOCATION";
    shows__locationText.className = "shows__heading";
    shows__card.appendChild(shows__locationText);

    let shows__location = document.createElement("p");
    shows__location.innerText = showObj["location"];
    shows__card.appendChild(shows__location);

    document.querySelector(".shows__table").appendChild(shows__card);

    let shows__button = document.createElement("button");
    shows__button.innerText = "BUY TICKETS";
    shows__button.classList.add("shows__button");
    shows__card.appendChild(shows__button);
}

for (let i = 0; i < shows__array.length; i++) {
    displayShow(shows__array[i]);
}