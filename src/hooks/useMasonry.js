import { useEffect, useRef } from "react";

let modifying = false;

const modifyLayout = (refMasonry) => {
  if (!modifying) {
    modifying = true;
    console.dir(refMasonry);
    console.log(refMasonry.current.clientWidth);
    const childNodes = refMasonry.current.childNodes;
    const boxWidth = refMasonry.current.style.width;
    console.log(childNodes, boxWidth);
    modifying = false;
  }
};

function useMasonry(listItems) {
  const refMasonry = useRef(); // ref for masonry container

  useEffect(() => {
    window.addEventListener("resize", () => modifyLayout(refMasonry));
    return () => {
      window.removeEventListener("resize", () => modifyLayout(refMasonry));
    };
  }, []);

  // Modify items layout
  useEffect(() => {
    modifyLayout(refMasonry);
  }, [listItems]);

  return { refMasonry };
}

export default useMasonry;
