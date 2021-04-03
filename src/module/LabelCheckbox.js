function LabelCheckbox(props) {
  return (
    <div className="pay">
      <input type="checkbox" className="no_pay" name="no_pay" value="no_pay" />
      <label htmlFor="no_pay">상호 무페이</label>
    </div>
  );
}

export default LabelCheckbox;
