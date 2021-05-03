function NavColorChange() {
    const app = document.querySelector(".GNB");
    const varibleHeight = app.offsetTop;
    const absoluteHeight =window.innerHeight;
    if (varibleHeight < absoluteHeight) {
        app.classList.add("special");
    } else {
        app.classList.remove("special");
    }
} 

export default NavColorChange;
