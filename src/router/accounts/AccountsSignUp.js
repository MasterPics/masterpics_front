import "../../css/router/accounts/AccountsSignUp.css";

function AccountsSignUp() {
  return (
    <div className="AccountsSignUp">
      <h1 className="logo">Masterpic's</h1>

      <form>
        <label htmlFor="id">아이디</label>
        <input id="id" type="text" name="id" />
        <label htmlFor="password">비밀번호</label>
        <input id="password" type="password" name="password" />
        <label htmlFor="password_confirm">비밀번호 확인</label>
        <input id="password_confirm" type="password" name="password_confirm" />
        <label htmlFor="email">이메일</label>
        <input id="email" type="email" name="email" />
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
}

export default AccountsSignUp;
