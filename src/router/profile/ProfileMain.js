import { useEffect, useState } from "react";
import "../../css/router/profile/ProfileMain.css";
import useMasonry from "../../hooks/useMasonry";
import SimpleCard from "../../module/SimpleCard";

const itemData = [
  {
    title: "flower makeup",
    image:
      "https://images.unsplash.com/photo-1547997256-cdbe00ada4f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80",
    like: 50,
    view: 100,
  },
];

function ProfileMain() {
  const [items, setItems] = useState(null);
  useEffect(() => {
    let JSXListItemData = [];
    for (let i = 0; i < 20; i++) {
      JSXListItemData.push(
        <div className="grid-item">
          <SimpleCard {...itemData[0]} key={i} />
        </div>
      );
    }
    setItems(JSXListItemData);
  }, []);
  const { refMasonry } = useMasonry(items, {
    fitWidth: true,
    columnWidth: ".grid-sizer",
    itemSelector: ".grid-item",
    initLayout: true,
  });

  return (
    <div className="ProfileMain">
      <div>
        <button key={1}>포트폴리오</button>
        <button key={2}>게시글</button>
        <button key={3}>촬영 일정</button>
        <button key={4}>저장목록</button>
      </div>

      <div ref={refMasonry}>
        <div className="grid-sizer"></div>
        {items}
      </div>
    </div>
  );
}

export default ProfileMain;
