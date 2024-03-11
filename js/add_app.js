export class Icon {
    static add_icon() {
        const el = document.querySelector("header");
        const parent_h = document.querySelector("header h1");
        el.children[0].innerText = "Cours javascript version 6+";
        let icon = document.createElement("span");
        parent_h.prepend(icon);

        icon.innerHTML += '<img src="./asset/javascript_icon_130900.png" alt="cover logo">';
    }
}