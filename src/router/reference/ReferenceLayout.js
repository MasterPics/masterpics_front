import { useState } from "react";
import "../../css/router/reference/ReferenceLayout.css";
import SearchForm from "../../module/SearchForm";
import ReferenceCard from "../../module/ReferenceCard";
import FilterList from "../../module/FilterList";
import useMasonry from "../../hooks/useMasonry";

const references = [
  {
    image:
      "https://images.unsplash.com/photo-1607074462346-cf9420098347?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1321&q=80",
    title: "reference title multi line the limitation is two line",
    like: 123,
    view: 1623,
    bookmarked: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1607074462346-cf9420098347?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1321&q=80",
    title: "reference title multi line the limitation is two line",
    like: 123,
    view: 1623,
    bookmarked: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1607074462346-cf9420098347?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1321&q=80",
    title: "reference title multi line the limitation is two line",
    like: 123,
    view: 1623,
    bookmarked: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1607074462346-cf9420098347?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1321&q=80",
    title: "reference title multi line the limitation is two line",
    like: 123,
    view: 1623,
    bookmarked: true,
  },
];

const filters = [{ name: "pinterest", default: true }, { name: "masterpics" }];

function ReferenceLayout() {
  const [referenceList, setReferenceList] = useState([references]);
  const { refMasonry } = useMasonry(referenceList, {
    fitWidth: true,
    columnWidth: 360,
    itemSelector: ".ReferenceCard",
    initLayout: false,
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

      <FilterList filters={filters} many={false} />

      <hr />

      <div className="main_section" ref={refMasonry}>
        {referenceList.map((reference) => {
          return <ReferenceCard {...reference} />;
        })}
      </div>
    </div>
  );
}

export default ReferenceLayout;
