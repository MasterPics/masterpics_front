import { useEffect, useRef } from "react";
import Masonry from "masonry-layout";

let modifying = false;

const modifyLayout = (refMasonry) => {
  if (!modifying) {
    modifying = true;
    console.dir(refMasonry);
    const childNodes = refMasonry.current.childNodes;
    const boxWidth = refMasonry.current.style.width;
    modifying = false;
  }
};

function useMasonry(listItems, options) {
  const refMasonry = useRef(); // ref for masonry container
  // useEffect(() => {
  //   window.addEventListener("resize", () => modifyLayout(refMasonry));
  //   return () => {
  //     window.removeEventListener("resize", () => modifyLayout(refMasonry));
  //   };
  // }, []);

  useEffect(() => {
    refMasonry.current.classList.add("useMasonryRef");
    let masonry = new Masonry(".useMasonryRef", options);
    masonry.layout();
  }, [listItems]);

  // Modify items layout
  // useEffect(() => {
  //   modifyLayout(refMasonry);
  // }, [listItems]);

  return { refMasonry };
}

export default useMasonry;
