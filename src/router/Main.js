import { useEffect, useState } from "react";
import "../css/router/Main.css";
import useMasonry from "../hooks/useMasonry";

function Main() {
  const [listItems, setListItems] = useState(null);

  useEffect(() => {
    let list = [];
    for (let i = 0; i < 9; i++) {
      list.push(<div className="grayBox grid-item"></div>);
    }
    setListItems(list);
  }, []);

  const { refMasonry } = useMasonry(listItems, {
    fitWidth: true,
    columnWidth: 380,
    itemSelector: ".grid-item",
    initLayout: false,
  });
  return (
    <div className="Main">
      <div className="hello">
        <div className="text_space">
          <h1>MasterPics'</h1>
          <h4>
            굳세게 것은 이는 이상을 같은 아름답고 청춘 넣는 없으면, 아니다.
            <br />
            위하여, 뜨고, 풀이 열락의 그들은 어디 천고에 불어 설산에서
            아름다우냐?
          </h4>
        </div>
        <div className="background_space">
          <div className="grayBox" id="top_right_grayBox"></div>
          <div className="grayBox" id="bottom_left_grayBox">
            <div className="grayBox" id="bottom_left_grayBox_bar"></div>
          </div>
        </div>
      </div>

      <div className="grid" ref={refMasonry}>
        {listItems}
      </div>
    </div>
  );
}

export default Main;
