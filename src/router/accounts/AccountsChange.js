import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/router/accounts/AccountsChange.css";

function AccountsChange() {
  const [newPW, setNewPW] = useState("");
  const [confirmPW, setConfirmPW] = useState("");
  const confirmPWRef = useRef();

  useEffect(() => {
    if (newPW !== confirmPW) {
      confirmPWRef.current.setCustomValidity("비밀번호가 일치하지 않습니다!");
    } else {
      confirmPWRef.current.setCustomValidity("");
    }
  }, [newPW, confirmPW]);

  return (
    <div className="AccountsChange">
      <div className="title">
        <h2>비밀번호 변경</h2>
        <h4>안전한 비밀번호로 설정하세요.</h4>
      </div>

      <form>
        <input
          type="password"
          placeholder="현재 비밀번호"
          name="current"
          required
        />
        <input
          type="password"
          placeholder="새 비밀번호"
          name="new"
          onChange={(event) => {
            setNewPW(event.target.value);
          }}
          required
        />
        <input
          type="password"
          placeholder="새 비밀번호 확인"
          ref={confirmPWRef}
          onChange={(event) => {
            setConfirmPW(event.target.value);
          }}
          required
        />
        <button type="submit">비밀번호 변경</button>
        <Link to="/accounts/signin" className="cancel_btn">
          취소
        </Link>
      </form>
    </div>
  );
}

export default AccountsChange;
