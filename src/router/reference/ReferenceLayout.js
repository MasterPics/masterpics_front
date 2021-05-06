import { useState } from "react";
import "../../css/router/reference/ReferenceLayout.css";
import SearchForm from "../../module/SearchForm";
import ReferenceCard from "../../module/ReferenceCard";
import FilterList from "../../module/FilterList";

const references = [
  {
    img:
      "https://images.unsplash.com/photo-1607074462346-cf9420098347?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1321&q=80",
    title: "reference title multi line the limitation is two line",
    meta: {
      like: 123,
      view: 1623,
      bookmarked: false,
    },
  },
  {
    img:
      "https://images.unsplash.com/photo-1607074462346-cf9420098347?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1321&q=80",
    title: "reference title multi line the limitation is two line",
    meta: {
      like: 123,
      view: 1623,
      bookmarked: true,
    },
  },
  {
    img:
      "https://images.unsplash.com/photo-1607074462346-cf9420098347?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1321&q=80",
    title: "reference title multi line the limitation is two line",
    meta: {
      like: 123,
      view: 1623,
      bookmarked: true,
    },
  },
  {
    img:
      "https://images.unsplash.com/photo-1607074462346-cf9420098347?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1321&q=80",
    title: "reference title multi line the limitation is two line",
    meta: {
      like: 123,
      view: 1623,
      bookmarked: true,
    },
  },
  {
    img:
      "https://images.unsplash.com/photo-1607074462346-cf9420098347?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1321&q=80",
    title: "reference title multi line the limitation is two line",
    meta: {
      like: 123,
      view: 1623,
      bookmarked: true,
    },
  },
  {
    img:
      "https://images.unsplash.com/photo-1607074462346-cf9420098347?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1321&q=80",
    title: "reference title multi line the limitation is two line",
    meta: {
      like: 123,
      view: 1623,
      bookmarked: true,
    },
  },
  {
    img:
      "https://images.unsplash.com/photo-1607074462346-cf9420098347?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1321&q=80",
    title: "reference title multi line the limitation is two line",
    meta: {
      like: 123,
      view: 1623,
      bookmarked: true,
    },
  },
  {
    img:
      "https://images.unsplash.com/photo-1607074462346-cf9420098347?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1321&q=80",
    title: "reference title multi line the limitation is two line",
    meta: {
      like: 123,
      view: 1623,
      bookmarked: true,
    },
  },
  {
    img:
      "https://images.unsplash.com/photo-1607074462346-cf9420098347?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1321&q=80",
    title: "reference title multi line the limitation is two line",
    meta: {
      like: 123,
      view: 1623,
      bookmarked: true,
    },
  },
  {
    img:
      "https://images.unsplash.com/photo-1607074462346-cf9420098347?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1321&q=80",
    title: "reference title multi line the limitation is two line",
    meta: {
      like: 123,
      view: 1623,
      bookmarked: true,
    },
  },
  {
    img:
      "https://images.unsplash.com/photo-1607074462346-cf9420098347?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1321&q=80",
    title: "reference title multi line the limitation is two line",
    meta: {
      like: 123,
      view: 1623,
      bookmarked: true,
    },
  },
  {
    img:
      "https://images.unsplash.com/photo-1607074462346-cf9420098347?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1321&q=80",
    title: "reference title multi line the limitation is two line",
    meta: {
      like: 123,
      view: 1623,
      bookmarked: true,
    },
  },
];

const filters = [{ name: "pinterest", default: true }, { name: "masterpics" }];

function ReferenceLayout() {
  const [referenceList, setReferenceList] = useState(references);

  const cards = referenceList.map((reference, index) => {
    return <ReferenceCard {...reference} key={index} />;
  });

  return (
    <div className="ReferenceLayout">
      <header>
        <h1>Reference</h1>
        <span>
          촬영을 위한 레퍼런스들을 검색하고 영감을 얻을 수 있는 레퍼런스들을
          저장해보세요!
        </span>

        <SearchForm />
      </header>

      <div className="main_section">
        <FilterList filters={filters} many={false} />
        <hr />
        <div className="references_container">{cards}</div>
      </div>
    </div>
  );
}

export default ReferenceLayout;
