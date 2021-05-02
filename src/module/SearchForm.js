import "../css/module/SearchForm.css";

function SearchForm(props) {
  return (
    <div className="SearchForm">
      <input
        type="text"
        className="form-control search"
        placeholder="검색어를 입력하세요."
      />

      <button className="btn btn-outline-secondary btn_search" type="button">
        <i class="fas fa-search"></i>
      </button>
    </div>
  );
}

export default SearchForm;
