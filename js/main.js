let bar_btn = document.querySelector(".btn_bar");
let cancel_btn = document.querySelector(".cancel_btn");
let bar_bar = document.querySelector(".navbar_lg");
let bar_btn2 = document.querySelector(".btn_bar_2");


bar_btn2.onclick = function() {
    bar_btn2.style.opacity = "0";
    bar_btn2.style.pointerEvents = "none";
    bar_bar.style.left = "0";

}

bar_btn.onclick = function() {
    bar_btn.style.opacity = "0";
    bar_btn.style.pointerEvents = "none";
    bar_bar.style.left = "0";

}
cancel_btn.onclick = function() {

    bar_bar.style.left = "-100%";

    bar_btn.style.opacity = "1";
    bar_btn.style.pointerEvents = "auto";

    bar_btn2.style.opacity = "1";
    bar_btn2.style.pointerEvents = "auto";

}




let btn_bar2 = document.querySelector(".btn_bar_2");
window.onscroll = function() {
    if (document.scrollingElement.scrollTop > 35) {
        btn_bar2.classList.add('btn_bar_2_active');
    } else {
        btn_bar2.classList.remove('btn_bar_2_active');
    }
}