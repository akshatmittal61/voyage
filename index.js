let noStories = 4, k = 0;
let carouselItem = document.querySelectorAll(".main-child__stories-carousel-item");
let carouselIndicatorBar = document.querySelectorAll(".main-child__stories-carousel-indicator__bar");
let carouselControl = document.querySelectorAll(".main-child__stories-carousel-control");
let sideBarLink = document.querySelectorAll(".side-bar__link");
let main = document.querySelector(".main");
let mainChild = document.querySelectorAll(".main-child");

for (let i = 0; i < 4; ++i) {
    if (document.querySelectorAll("meta")[i].getAttribute("name") == "theme-color") {
        if (document.querySelector("body").classList.contains("light"))
            document.querySelectorAll("meta")[i].setAttribute("content", "#ffffff");
        else if (document.querySelector("body").classList.contains("dark"))
            document.querySelectorAll("meta")[i].setAttribute("content", "#000000");
    }
}
carouselIndicatorBar[k].style.backgroundColor = "#616161";
carouselControl[0].addEventListener("click", () => {
    for (let j = 0; j < 4; ++j)
        carouselIndicatorBar[j].style.backgroundColor = "#bdbdbd";
    for (let i = 0; i < noStories; ++i) {
        if (!carouselItem[i].classList.contains("dispn")) {
            console.log("In here");
            carouselItem[i].classList.add("dispn");
            if (i == 0) k = noStories - 1;
            else k = i - 1;
            carouselItem[k].classList.remove("dispn");
            carouselIndicatorBar[k].style.backgroundColor = "#616161";
            break;
        }
    }
});
carouselControl[1].addEventListener("click", () => {
    for (let j = 0; j < 4; ++j)
        carouselIndicatorBar[j].style.backgroundColor = "#bdbdbd";
    for (let i = 0; i < noStories; ++i) {
        if (!carouselItem[i].classList.contains("dispn")) {
            console.log("In here");
            carouselItem[i].classList.add("dispn");
            if (i == noStories - 1) k = 0;
            else k = i + 1;
            carouselItem[k].classList.remove("dispn");
            carouselIndicatorBar[k].style.backgroundColor = "#616161";
            break;
        }
    }
});
for (let i = 0; i < 4; ++i) {
    document.querySelectorAll(".main-child__stories-carousel-indicator")[i].addEventListener("click", () => {
        for (let j = 0; j < 4; ++j) {
            if (!carouselItem[j].classList.contains("dispn")) {
                carouselItem[j].classList.add("dispn");
                break;
            }
        }
        for (let j = 0; j < 4; ++j)
            carouselIndicatorBar[j].style.backgroundColor = "#bdbdbd";
        carouselItem[i].classList.remove("dispn");
        carouselIndicatorBar[i].style.backgroundColor = "#616161";
    })
}
document.querySelector(".header-left__burger").addEventListener("click", () => {
    document.querySelector(".aside").classList.toggle("aside__expand");
    document.querySelector(".aside").classList.toggle("aside__hide");
})

for (let i = 0; i < 5; ++i) {
    sideBarLink[i].addEventListener("click", (e) => {
        for (let j = 0; j < 5; ++j) {
            if (sideBarLink[j].classList.contains("side-bar__link__highlight"))
                sideBarLink[j].classList.remove("side-bar__link__highlight");
        }
        sideBarLink[i].classList.add("side-bar__link__highlight");
    })
}

function mediafun(x) {
    if (x.matches) {
        document.querySelector(".aside").classList.remove("aside__expand");
        document.querySelector(".aside").classList.add("aside__hide");
    }
}

let media = window.matchMedia("(max-width: 992px)");
mediafun(media);
media.addListener(mediafun);