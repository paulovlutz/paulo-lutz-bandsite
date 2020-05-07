let api_key = "d58a4a47-c718-4105-9099-ffcab0654226";

let commentsDiv = document.querySelector(".conversation__comments");

function displayComment(commentObj) {

    let comments__card = document.createElement("div");
    comments__card.className = "conversation__card";

    let comment__row = document.createElement("div");
    comment__row.className = "conversation__row";

    let column__picture = document.createElement("div");
    column__picture.className = "conversation__picture";
    comment__row.appendChild(column__picture);

    let profile__picture = document.createElement("img");
    profile__picture.src = "./assets/images/profile-picture.jpeg";
    profile__picture.className = "conversation__profile-picture";
    column__picture.appendChild(profile__picture);

    let column__details = document.createElement("div");
    column__details.className = "conversation__details";
    comment__row.appendChild(column__details);

    let column__namedate = document.createElement("div");
    column__namedate.className = "conversation__nameAndDate";

    let comment__name = document.createElement("p");
    comment__name.innerText = commentObj["name"];
    comment__name.className = "conversation__nameAndDate-name";
    column__namedate.appendChild(comment__name);

    let comment__date = document.createElement("p");
    comment__date.className = "conversation__nameAndDate-date"
    comment__date.innerText = commentObj["timestamp"];
    column__namedate.appendChild(comment__date);

    column__details.append(column__namedate);

    let comment__text = document.createElement("p");
    comment__text.innerText = commentObj["comment"];
    column__details.appendChild(comment__text);

    comments__card.appendChild(comment__row);
    commentsDiv.prepend(comments__card);
}

// Form

// let form = document.querySelector(".conversation__form");
// form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     let newDate = new Date();
//     let currentDate = (newDate.getMonth() + 1) + '/' + newDate.getDate() + '/' + newDate.getFullYear();
//     let newCommentObj = {
//         "name": e.target.name.value,
//         "date": currentDate,
//         "comment": e.target.comment.value
//     }

//     conversationComments.unshift(newCommentObj);

//     commentsDiv.innerText = "";

//     for (let i = 0; i < conversationComments.length; i++) {
//         displayComment(conversationComments[i]);
//     }

//     form.reset();
// });

function getCommentsData() {
    displayComment.innerText = "";
    axios
        .get(`https://project-1-api.herokuapp.com/comments?api_key=${api_key}`)
        .then(result => {
            let conversationData = result.data;

            for (let i = 0; i < conversationData.length; i++) {
                displayComment(conversationData[i]);
            }
        })

        .catch(err => {
            console.error(err);
        });
}

getCommentsData();

let form = document.querySelector(".conversation__form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let newCommentObj = {
        "name": e.target.name.value,
        "comment": e.target.comment.value
    }

    axios
        .post(`https://project-1-api.herokuapp.com/comments?api_key=${api_key}`,
            newCommentObj)

        .then(result => {
            console.log(result.data);
            form.reset();
            displayComment(result.data);
        })

        .catch(err =>
            console.error(err));
});