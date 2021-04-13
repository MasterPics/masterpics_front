import "../css/module/FilterList.css";

function FilterList({ filters }) {
  const array = [];

  filters.forEach((filter, index) => {
    array.push(<button key={index}>{filter.name}</button>);
  });

  return <div className="FilterList">{array}</div>;
}

export default FilterList;
