let burgerMenu = document.getElementById("burgerMenu");
let navlinks = document.getElementById("navlinksBurger");

burgerMenu.onclick = function(){
    console.log("burgerMenu: click");
    navlinks.classList.toggle("active");
    const isOpen = navlinks.classList.contains("active");
}
