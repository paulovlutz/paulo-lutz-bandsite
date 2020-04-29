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

for (var i = 0; i < shows__array.length; i++) {
    let shows__card = document.createElement("p");
    let shows__date = document.createTextNode(shows__array[i]["date"]);
    shows__card.appendChild(shows__date);
    document.querySelector(".shows__dates").appendChild(shows__card);

    let shows__venue = document.createTextNode(shows__array[i]["venue"]);
    shows__card.appendChild(shows__venue);
    document.querySelector(".shows__dates").appendChild(shows__card);

    let shows__location = document.createTextNode(shows__array[i]["location"]);
    shows__card.appendChild(shows__location);
    document.querySelector(".shows__dates").appendChild(shows__card);

    let shows__button = document.createElement("button");
    shows__button.innerText = "BUY TICKETS";
    shows__button.classList.add("shows__button");
    shows__card.appendChild(shows__button);
    document.querySelector(".shows__dates").appendChild(shows__button);
}