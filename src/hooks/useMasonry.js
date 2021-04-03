import { useEffect, useRef } from "react";

let modifying = false;

const modifyLayout = (refMasonry) => {
  if (!modifying) {
    modifying = true;
    console.log(refMasonry.current.childNodes);
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
