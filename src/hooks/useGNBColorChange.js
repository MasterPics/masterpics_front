import { useEffect } from "react";

let App;
let GNB;

const CLASS_NAME = "black";

function NavColorChange() {
  const scrollTop = App.scrollTop;
  const baseHeight = window.innerHeight;
  if (scrollTop < baseHeight) {
    GNB.classList.add(CLASS_NAME);
  } else {
    GNB.classList.remove(CLASS_NAME);
  }
}

function useGNBColorChange() {
  useEffect(() => {
    App = document.querySelector(".App");
    GNB = document.querySelector(".GNB");
    GNB.classList.add(CLASS_NAME);
    App.addEventListener("scroll", NavColorChange);
    window.addEventListener("resize", NavColorChange);

    return () => {
      App.removeEventListener("scroll", NavColorChange);
      window.removeEventListener("resize", NavColorChange);
      GNB.classList.remove(CLASS_NAME);
    };
  }, []);
}

export default useGNBColorChange;
