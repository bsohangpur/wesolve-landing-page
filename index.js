let mainslider = document.getElementById("slider");
let box = document.getElementsByClassName("item");

let next = () => {
    mainslider.append(box[0]);
};
let prev = () => {
    mainslider.prepend(box[box.length - 1]);
};





// when butten is close
let menu_open = () => {
    document.getElementById("nav-mobile_close").id = "nav-mobile_open"
    document.getElementById("menu-close").id = "menu-open";
    document.getElementById("menu-close-btn").id = "menu-open-btn";
    document.getElementById("nav").style.height = "100vh";
}
//   when butten is open
let menu_close = () => {
    document.getElementById("nav-mobile_open").id = "nav-mobile_close";
    document.getElementById("menu-open").id = "menu-close";
    document.getElementById("menu-open-btn").id = "menu-close-btn";
    document.getElementById("nav").style.height = "10vh"
}
