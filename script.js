document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior: "smooth"
        });

    });
});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        if(position < window.innerHeight - 100){
            section.classList.add("show");
        }

    });
const logo = document.querySelector(".footer_logo");
const sound = document.getElementById("footerSound");
logo.addEventListener("click", () => {
    sound.currentTime = 0; // reinicia
    sound.play();

});
});

