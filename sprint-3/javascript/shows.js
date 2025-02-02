let api_key = "53dec659-95be-4408-a184-a3c3050da62f";

function displayShowHeader() {
    let table = document.querySelector(".shows__table");

    let divTable = document.createElement("div");
    divTable.className = "tablet__header";

    let headerDates = document.createElement("p");
    headerDates.innerText = "DATES";
    headerDates.className = "tablet__header--text";
    let headerVenue = document.createElement("p");
    headerVenue.innerText = "VENUE";
    headerVenue.className = "tablet__header--text";
    let headerLocation = document.createElement("p");
    headerLocation.innerText = "LOCATION";
    headerLocation.className = "tablet__header--text";

    divTable.appendChild(headerDates);
    divTable.appendChild(headerVenue);
    divTable.appendChild(headerLocation);
    table.appendChild(divTable);
}

function displayShow(showObj) {
    let shows__card = document.createElement("div");
    shows__card.className = "shows__card";

    let shows__dateText = document.createElement("p");
    shows__dateText.innerText = "DATE";
    shows__dateText.className = "shows__heading paragraph";
    shows__card.appendChild(shows__dateText);

    let shows__date = document.createElement("h3");
    shows__date.innerText = showObj.date;
    shows__date.className = "heading-3";
    shows__card.appendChild(shows__date);

    let shows__venueText = document.createElement("p");
    shows__venueText.innerText = "VENUE";
    shows__venueText.className = "shows__heading paragraph";
    shows__card.appendChild(shows__venueText);

    let shows__venue = document.createElement("p");
    shows__venue.innerText = showObj.place;
    shows__venue.className = "paragraph";
    shows__card.appendChild(shows__venue);

    let shows__locationText = document.createElement("p");
    shows__locationText.innerText = "LOCATION";
    shows__locationText.className = "shows__heading paragraph";
    shows__card.appendChild(shows__locationText);

    let shows__location = document.createElement("p");
    shows__location.innerText = showObj.location;
    shows__location.className = "paragraph"
    shows__card.appendChild(shows__location);

    document.querySelector(".shows__table").appendChild(shows__card);

    let shows__button = document.createElement("button");
    shows__button.innerText = "BUY TICKETS";
    shows__button.classList.add("shows__button");
    shows__card.appendChild(shows__button);
}

displayShowHeader();

axios
    .get(`https://project-1-api.herokuapp.com/showdates?api_key=${api_key}`)
    .then(result => {
        let showData = result.data;
        
        for (let i=0; i < showData.length; i++) {
            displayShow(showData[i]);
        }
    })
    
    .catch(err => {
        console.error(err);
    });