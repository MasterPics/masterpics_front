import "../../css/router/place/PlaceMain.css";
import { Link } from "react-router-dom";
import SearchPlace from "../../module/SearchPlace";
import LabelCheckbox from "../../module/LabelCheckbox";
import ClickDropdown from "../../module/ClickDropdown";
import StudioCard from "../../module/StudioCard";
import React from "react";

const studioList = [
  {
    img: "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    name: "아우러룸",
    location: "서울특별시 강남구 테헤란로 359-12 1층",
    desc: "아우러룸은 어쩌고 상세 설명을 써서 여기에 이만큼 보여주고 2줄까지 가능하도록 한다...",
    //hashtag: hashtag,
    user: {
      name: "마스터픽픽스",
      category: "model",
    },
    meta: {
      like: "3,584",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1581952976147-5a2d15560349?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
    name: "505스튜디오",
    location: "서울특별시 강남구 테헤란로 359-12 1층",
    desc: "아우러룸은 어쩌고 상세 설명을 써서 여기에 이만큼 보여주고 2줄까지 가능하도록 한다...",
    //hashtag:hashtag,
    user: {
      name: "마스터픽픽스",
      category: "model",
    },
    meta: {
      like: "3,584",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    name: "리얼톤스튜디오",
    location: "서울특별시 강남구 테헤란로 359-12 1층",
    desc: "아우러룸은 어쩌고 상세 설명을 써서 여기에 이만큼 보여주고 2줄까지 가능하도록 한다...",
    //hashtag:hashtag,
    user: {
      name: "마스터픽픽스",
      category: "model",
    },
    meta: {
      like: "3,584",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    name: "너드스튜디오",
    location: "서울특별시 강남구 테헤란로 359-12 1층",
    desc: "아우러룸은 어쩌고 상세 설명을 써서 여기에 이만큼 보여주고 2줄까지 가능하도록 한다...",
    //hashtag:hashtag,
    user: {
      name: "마스터픽픽스",
      category: "model",
    },
    meta: {
      like: "3,584",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    name: "타로나픽쳐스",
    location: "서울특별시 강남구 테헤란로 359-12 1층",
    desc: "아우러룸은 어쩌고 상세 설명을 써서 여기에 이만큼 보여주고 2줄까지 가능하도록 한다...",
    //hashtag:hashtag,
    user: {
      name: "마스터픽픽스",
      category: "model",
    },
    meta: {
      like: "3,584",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    name: "아우러룸",
    location: "서울특별시 강남구 테헤란로 359-12 1층",
    desc: "아우러룸은 어쩌고 상세 설명을 써서 여기에 이만큼 보여주고 2줄까지 가능하도록 한다...",
    //hashtag:hashtag,
    user: {
      name: "마스터픽픽스",
      category: "model",
    },
    meta: {
      like: "3,584",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    name: "427스튜디오",
    location: "서울특별시 강남구 테헤란로 359-12 1층",
    desc: "아우러룸은 어쩌고 상세 설명을 써서 여기에 이만큼 보여주고 2줄까지 가능하도록 한다...",
    //hashtag:hashtag,
    user: {
      name: "마스터픽픽스",
      category: "model",
    },
    meta: {
      like: "3,584",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    name: "UTA스튜디오",
    location: "서울특별시 강남구 테헤란로 359-12 1층",
    desc: "아우러룸은 어쩌고 상세 설명을 써서 여기에 이만큼 보여주고 2줄까지 가능하도록 한다...",
    //hashtag:hashtag,
    user: {
      name: "마스터픽픽스",
      category: "model",
    },
    meta: {
      like: "3,584",
    },
  },
];

function PlaceMain(props) {
  return (
    <div className="PlaceMain">
      <header className="top-container">
        <div className="content_wrapper">
          <h1 className="title">Place</h1>
          <div className="desc">
            키워드 검색을 통해 나의 시안과 예산에 맞는 촬영 공간을 찾아보고,{" "}
            <br />
            내가 아는 촬영 장소들을 사람들과 공유해보세요!
          </div>
          <Link className="link" to="">
            장소 등록하러 가기
          </Link>
        </div>
      </header>

      <div className="filter">
        <SearchPlace />
        <div className="checkbox">
          <LabelCheckbox />
          <div className="location">
            <label htmlFor="is-near">내 위치 주변 </label>
            <input
              type="checkbox"
              className="is-near"
              name="is-near"
              value="is-near"
            />
          </div>
          <ClickDropdown />
        </div>
      </div>

      <div className="line"></div>

      <div className="main-container">
        <div className="studios-container">
          <div className="studio">
            {studioList.map((PlaceMain, index) => {
              return (
                <StudioCard {...PlaceMain} key={index} className={index} />
              );
            })}
          </div>
        </div>

        <div className="place-pagination">
          <ul className="place-pagination_list">
            <li className="place-pagination_item">
              <a href="#">이전</a>
            </li>
            <li className="place-pagination_item">
              <a href="/place">1</a>
            </li>
            <li className="place-pagination_item">
              <a href="/place/page=2">2</a>
            </li>
            <li className="place-pagination_item">
              <a href="/place/page=3">3</a>
            </li>
            <li className="place-pagination_item">
              <a href="/place/page=4">4</a>
            </li>
            <li className="place-pagination_item">
              <a href="/place/page=5">5</a>
            </li>
            <li className="place-pagination_item">
              <a href="/place/page=2">다음</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PlaceMain;
