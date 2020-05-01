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

let commentsDiv = document.querySelector(".conversation__coments");

function displayComment(commentObj) {

    let comments__card = document.createElement("div");
    comments__card.className = "comments__card";

    let comment__name = document.createElement("p");
    comment__name.innerText = commentObj["name"];
    comments__card.appendChild(comment__name);

    let comment__date = document.createElement("p");
    comment__date.innerText = commentObj["date"];
    comments__card.appendChild(comment__date);

    let comment__text = document.createElement("p");
    comment__text.innerText = commentObj["comment"];
    comments__card.appendChild(comment__text);
    commentsDiv.appendChild(comments__card);
}

for (let i = 0; i < conversationComments.length; i++) {
    displayComment(conversationComments[i]);
}

let form = document.querySelector(".conversation__form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    let newCommentObj = {
        "name": e.target.name.value,
        "comment": e.target.comment.value
    }

    conversationComments.push(newCommentObj);

    commentsDiv.innerText = "";

    for (let i = 0; i < conversationComments.length; i++) {
        displayComment(conversationComments[i]);
    }

    form.reset();
});