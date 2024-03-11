import { Icon } from "./add_app.js";

document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    console.log("Hello js");
    const x = 1.5;
    const y = "1.5";
    const bool = true;
    let title = new String("Javascript");
    console.log(typeof bool);

    Icon.add_icon();
});