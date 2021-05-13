import "../css/module/LabelCheckbox.css";

function LabelCheckbox(props) {
  return (
    <div className="pay">
      <label htmlFor="no_pay">상호무페이</label>
      <input type="checkbox" className="no_pay" name="no_pay" value="no_pay" />
    </div>
  );
}

export default LabelCheckbox;
