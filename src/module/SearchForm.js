import "../css/module/SearchForm.css";

function SearchForm(props) {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control search"
        value=""
        onChange={() => {}}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary btn_search"
          type="button"
          id=""
        >
          찾기
        </button>
      </div>
    </div>
  );
}

export default SearchForm;
