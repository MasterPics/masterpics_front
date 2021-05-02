import { useState } from "react";
import "../../css/router/reference/ReferenceLayout.css";
import SearchForm from "../../module/SearchForm";
import ReferenceCard from "../../module/ReferenceCard";

function ReferenceLayout() {
  const [referenceList, setReferenceList] = useState([]);

  return (
    <div className="ReferenceLayout">
      <header>
        <h1>Reference</h1>
        <span>
          촬영을 위한 레퍼런스들을 검색하고 영감을 얻을 수 있는 레퍼런스들을
          저장해보세요!
        </span>

        <SearchForm />

        <div className="filter_container">
          <button></button>
          <button></button>
        </div>
      </header>

      <div className="main_section">
        {referenceList.map((reference) => {
          <ReferenceCard {...reference} />;
        })}
      </div>
    </div>
  );
}

export default ReferenceLayout;
