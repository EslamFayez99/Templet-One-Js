let toggleBtn = document.querySelector(".navbtn");
let tLinks = document.querySelector(".navbar");
let closeNav = document.querySelector(".close");

toggleBtn.onclick = function () {

    tLinks.classList.add("active")

};

closeNav.onclick = () => {

    tLinks.classList.remove('active');

};



let header = document.getElementById("header");

let i = 100;


window.onscroll = function () {

    scrollHeader();

}

function scrollHeader() {

    if(window.scrollY >= i) {

        header.classList.add("bg-header");

    }else{

        header.classList.remove("bg-header");

    }

}
