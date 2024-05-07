let main = document.querySelector(".main");
let search = document.querySelector(".search");
let input = document.querySelector(".s-input");
let leftNav = document.querySelector(".left-nav");
let rnav2 = document.querySelector(".right-nav2");
let close = document.querySelector(".close");
let profileIcon = document.querySelector(".profile-icon");
let profile = document.querySelector(".profile");
let searchOutput = document.querySelector(".search-output-div");


// navbar code

search.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    rnav2.style.width = "100%";
    // searchOutput.style.display = "block";
    searchOutput.style.width = "100%";
    rnav2.style.backgroundColor = "#eae9e990";
    leftNav.style.opacity = 0;
    input.style.opacity = 1;
    input.style.display = "block";
    rnav2.style.marginRight = "10px";
    leftNav.style.position = "absolute";
    close.style.display = "block";
    input.focus();
  } else {
    rnav2.style.width = "100%";
    searchOutput.style.width = "100%";
    // searchOutput.style.display = "block";
    rnav2.style.backgroundColor = "#eae9e990";
    leftNav.style.opacity = 1;
    input.style.opacity = 1;
    input.style.display = "block";
    rnav2.style.marginRight = "10px";
    close.style.display = "block";
    input.focus();
  }
});
close.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    searchOutput.style.display = "none";
    close.style.display = "none";
    rnav2.style.width = "0%";
    rnav2.style.backgroundColor = "transparent";
    leftNav.style.display = "flex";
    leftNav.style.position = "relative";
    input.style.display = "none";
    rnav2.style.marginRight = "10px";
    leftNav.style.opacity = 1;
  } else {
    searchOutput.style.display = "none";
    close.style.display = "none";
    rnav2.style.width = "10%";
    rnav2.style.backgroundColor = "transparent";
    leftNav.style.display = "flex";
    input.style.display = "none";
    rnav2.style.marginRight = "10px";
  }
});

function scrollSet() {
  let prevScrollPos = window.pageYOffset;
  let navbar = document.querySelector(".nav2");

  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      navbar.style.top = "64px";
    } else {
      navbar.style.top = "-22px";
    }
    prevScrollPos = currentScrollPos;
  };
}
scrollSet();

let p = true;
profileIcon.addEventListener("click",()=>{
    if(p){
        profile.style.display = "block";
        setTimeout(()=>{
            profile.style.opacity = "1";
            p = false;
        },1)
    }else{
        profile.style.opacity = "0";
        setTimeout(()=>{
            profile.style.display = "none";
            p = true;
        },1)
    }
})


