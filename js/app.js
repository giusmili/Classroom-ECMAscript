document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    console.log("Hello js");
    const x = 1.5;
    const y = "1.5";
    const bool = true;
    let title = new String("Javascript");
    console.log(typeof bool);
    const el = document.querySelector("header");
    el.children[0].innerText = "Cours javascript version 6+";
    console.log(el.children[2].innerText);
});