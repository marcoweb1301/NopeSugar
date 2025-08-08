const anonymousInput = document.querySelector('.anonymous-input');
const userComment = document.querySelector('.usercomment');
const publishBtn = document.querySelector('#publish');
const comments = document.querySelector('.comments');

userComment.addEventListener("input",(e)=> {
    if(e.currentTarget.value !== "") {
        publishBtn.removeAttribute("disabled");
        publishBtn.classList.add("able");
    } else {
        publishBtn.setAttribute("disabled","disabled");
        publishBtn.classList.remove("able");
    }
})

//User object
const UserId = {
    name: "",
    message: "",
    date: ""
}

// Create a function to publish comment
function addComment() {
    UserId.name = anonymousInput.value;
    UserId.message = userComment.value;
    UserId.date = new Date().toLocaleString();

    let publishedComment = `
    <div class="parent">
        <img src="image/user.png" />
        <div>
            <h3>${UserId.name}</h3>
            <p>${UserId.message}</p>
            <div class="engagements"><img src="image/like.png"><img src="image/share.png"></div>
            <span>${UserId.date}</span>
        </div>
    </div>
    `;

    comments.innerHTML += publishedComment;

    // connect comment box to local storage
    localStorage.setItem("comments", comments.innerHTML);

    userComment.value = "";
    anonymousInput.value = "Anonymous";

    // let increments the count when a comment is posted;
    let counts = document.querySelectorAll(".parent").length;
    document.getElementById("comment-count").textContent = counts;
}

// This add an eventlistener to the button
publishBtn.addEventListener("click", addComment);

// When the DOM loads, fetch data from the localstorage
window.addEventListener("DOMContentLoaded", (e) => {
    comments.innerHTML = localStorage.getItem("comments");

    // let increments the count when a comment is posted;
    let counts = document.querySelectorAll(".parent").length;
    document.getElementById("comment-count").textContent = counts;
});