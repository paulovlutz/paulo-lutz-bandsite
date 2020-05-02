let conversationComments = [{
        "name": "Micheal Lyons",
        "date": "12/18/2018",
        "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
    },

    {
        "name": "Gary Wong",
        "date": "12/12/2018",
        "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
    },

    {
        "name": "Theodore Duncan",
        "date": "11/15/2018",
        "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
    },
];

let commentsDiv = document.querySelector(".conversation__comments");

function displayComment(commentObj) {

    let comments__card = document.createElement("div");
    comments__card.className = "comments__card";

    let comment__row = document.createElement("div");
    comment__row.className = "row";

    let column__picture = document.createElement("div");
    column__picture.className = "column__picture";
    comment__row.appendChild(column__picture);

    let profile__picture = document.createElement("img");
    profile__picture.src = "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
    profile__picture.className = "profile-picture";
    column__picture.appendChild(profile__picture);

    let column__details = document.createElement("div");
    column__details.className = "column__details";
    comment__row.appendChild(column__details);

    let column__namedate = document.createElement("div");
    column__namedate.className = "column__namedate";

    let comment__name = document.createElement("p");
    comment__name.innerText = commentObj["name"];
    comment__name.className = "name__paragraph";
    column__namedate.appendChild(comment__name);

    let comment__date = document.createElement("p");
    comment__date.className = "date__paragraph"
    comment__date.innerText = commentObj["date"];
    column__namedate.appendChild(comment__date);

    column__details.append(column__namedate);

    let comment__text = document.createElement("p");
    comment__text.innerText = commentObj["comment"];
    column__details.appendChild(comment__text);

    comments__card.appendChild(comment__row);
    commentsDiv.appendChild(comments__card);
}

for (let i = 0; i < conversationComments.length; i++) {
    displayComment(conversationComments[i]);
}

// Form

let form = document.querySelector(".conversation__form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    let newCommentObj = {
        "name": e.target.name.value,
        "date": "05/02/2020",
        "comment": e.target.comment.value
    }

    conversationComments.push(newCommentObj);

    commentsDiv.innerText = "";

    for (let i = 0; i < conversationComments.length; i++) {
        displayComment(conversationComments[i]);
    }

    form.reset();
});