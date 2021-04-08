import "../css/module/PlusButton.css";

function PlusButton() {
  return (
    <div className="plus_button">
      <a className="create_btn" href="{% url 'contact:contact_create' %}">
        <i className="far fa-plus-square"></i>
      </a>
    </div>
  );
}

export default PlusButton;
