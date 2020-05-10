let api_key = "53dec659-95be-4408-a184-a3c3050da62f";

let commentsDiv = document.querySelector(".conversation__comments");

function buildTimeDescription(time) {
    let currentDate = new Date();

    let msMinute = 60 * 1000;
    let msHour = msMinute * 60;
    let msDay = msHour * 24;
    let msMonth = msDay * 30;
    let msYear = msDay * 365;

    let difference = currentDate - time;

    if (difference < msMinute) {
         return "Posted " + Math.round(difference/1000) + "s ago";   
    }

    else if (difference < msHour) {
         return "Posted " + Math.round(difference/msMinute) + "m ago";   
    }

    else if (difference < msDay ) {
         return "Posted " + Math.round(difference/msHour ) + "h ago";   
    }

    else if (difference < msMonth) {
        return "Posted" + Math.round(difference/msDay) + " days ago";   
    }

    else if (difference < msYear) {
        return "Posted " + Math.round(difference/msMonth) + " months ago";   
    }

    else {
        return "Posted " + Math.round(difference/msYear ) + " years ago";   
    }
}

function addListenerToDeleteForm(form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        let id = e.target.hiddenID.value;

        axios 
            .delete (`https://project-1-api.herokuapp.com/comments/${id}?api_key=${api_key}`)

            .then(result => {
                let selectParentCard = form.closest(".conversation__card");
                selectParentCard.remove();
            })
    
            .catch(err =>
                console.error(err));
    });
}

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
    profile__picture.alt = "profile-picture";
    column__picture.appendChild(profile__picture);

    let column__details = document.createElement("div");
    column__details.className = "conversation__details";
    comment__row.appendChild(column__details);

    let column__namedate = document.createElement("div");
    column__namedate.className = "conversation__nameAndDate";

    let comment__name = document.createElement("p");
    comment__name.innerText = commentObj.name;
    comment__name.className = "conversation__nameAndDate-name";
    column__namedate.appendChild(comment__name);

    let comment__date = document.createElement("p");
    comment__date.className = "conversation__nameAndDate-date";
    let time = commentObj.timestamp;
    comment__date.innerText = buildTimeDescription(time);
    column__namedate.appendChild(comment__date);

    column__details.append(column__namedate);

    let comment__text = document.createElement("p");
    comment__text.innerText = commentObj.comment;
    column__details.appendChild(comment__text);

    let deleteForm = document.createElement("form");
    deleteForm.className = "conversation__delete-form";
    let conversation__inputHidden = document.createElement("input");
    conversation__inputHidden.setAttribute("type", "hidden");
    conversation__inputHidden.setAttribute("name", "hiddenID");
    conversation__inputHidden.setAttribute("value", commentObj.id);

    deleteForm.appendChild(conversation__inputHidden);

    let comment__delete = document.createElement("button");
    comment__delete.innerText = "Delete";
    comment__delete.className = "conversation__delete-button";
    deleteForm.appendChild(comment__delete);

    addListenerToDeleteForm(deleteForm);

    column__details.appendChild(deleteForm);

    comments__card.appendChild(comment__row);
    commentsDiv.prepend(comments__card);
}

function getCommentsData() {
    commentsDiv.innerText = "";
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
            form.reset();
            displayComment(result.data);
        })

        .catch(err =>
            console.error(err));
});