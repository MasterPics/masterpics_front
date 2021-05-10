import "../css/module/RandomMagazine.css";
import MagazineCard from "./MagazineCard";

const cards = [
  {
    img:
      "https://images.unsplash.com/photo-1596760020480-3b330a990539?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=935&q=80",
    title: "This is TITLE",
    user: {
      name: "Seol",
      category: "photographer",
    },
    meta: {
      like: 213,
      view: 12123,
      bookmark: 123,
    },
  },
  {
    img:
      "https://images.unsplash.com/photo-1616740386718-6a4e42e3cf02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "This is TITLE",
    user: {
      name: "Seol",
      category: "photographer",
    },
    meta: {
      like: 213,
      view: 12123,
      bookmark: 123,
    },
  },
  {
    img:
      "https://images.unsplash.com/photo-1615537572530-4c76817865c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "This is TITLE",
    user: {
      name: "Seol",
      category: "photographer",
    },
    meta: {
      like: 213,
      view: 12123,
      bookmark: 123,
    },
  },
  {
    img:
      "https://images.unsplash.com/photo-1614788466123-1ec2a5833087?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "This is TITLE",
    user: {
      name: "Seol",
      category: "photographer",
    },
    meta: {
      like: 213,
      view: 12123,
      bookmark: 123,
    },
  },
  {
    img:
      "https://images.unsplash.com/photo-1618278096912-d14cda36d45b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
    title: "This is TITLE",
    user: {
      name: "Seol",
      category: "photographer",
    },
    meta: {
      like: 213,
      view: 12123,
      bookmark: 123,
    },
  },
];

function RandomMagazine() {
  return (
    <div className="RandomMagazine">
      {cards.map((card, index) => {
        return (
          <div className={`card_container-${index}`} key={index}>
            <MagazineCard key={index} {...card} />
          </div>
        );
      })}

      <div className="text-0">
        <h1>Random Magazine</h1>
        <h2>with passionate artists</h2>
        <p>
          마스터픽스 아티스트들의 다양한 포트폴리오 작업물을 <br />
          확인하세요.
        </p>
      </div>

      <div className="text-1">
        contact and portfolio website <br />
        for passionate artists. <br />
        masterpic's provides <br />
        web services for <br />
        personal photo work.
      </div>
    </div>
  );
}

export default RandomMagazine;
