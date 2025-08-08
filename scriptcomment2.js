const anonymousInput2 = document.querySelector('.anonymous-input2');
const userComment2 = document.querySelector('.usercomment2');
const publishBtn2 = document.querySelector('#publish2');
const comments2 = document.querySelector('.comments2');

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
const UserId2 = {
    name: "",
    message: "",
    date: ""
}

// Create a function to publish comment
function addComment() {
    UserId2.name = anonymousInput2.value;
    UserId2.message = userComment2.value;
    UserId2.date = new Date().toLocaleString();

    let publishedComment2 = `
    <div class="parent">
        <img src="image/user.png" />
        <div>
            <h3>${UserId2.name}</h3>
            <p>${UserId2.message}</p>
            <div class="engagements"><img src="image/like.png"><img src="image/share.png"></div>
            <span>${UserId2.date}</span>
        </div>
    </div>
    `;

    comments2.innerHTML += publishedComment2;

    // connect comment box to local storage
    localStorage.setItem("comments", comments2.innerHTML);

    userComment2.value = "";
    anonymousInput2.value = "Anonymous";

    // let increments the count when a comment is posted;
    let counts2 = document.querySelectorAll(".parent").length;
    document.getElementById("comment-count2").textContent = counts2;
}

// This add an eventlistener to the button
publishBtn.addEventListener("click", addComment);

// When the DOM loads, fetch data from the localstorage
window.addEventListener("DOMContentLoaded", (e) => {
    comments2.innerHTML = localStorage.getItem("comments");

    // let increments the count when a comment is posted;
    let counts2 = document.querySelectorAll(".parent").length;
    document.getElementById("comment-count2").textContent = counts2;
});