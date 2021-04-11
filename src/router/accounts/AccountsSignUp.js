import "../../css/router/accounts/AccountsSignUp.css";

function AccountsSignUp() {
  return (
    <div className="AccountsSignUp">
      <h1 className="logo">Masterpic's</h1>

      <form>
        <input placeholder="아이디" type="text" name="id" />
        <input placeholder="비밀번호" type="password" name="password" />
        <input
          placeholder="비밀번호 확인"
          type="password"
          name="password_confirm"
        />
        <input placeholder="이메일" type="email" name="email" />
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
}

export default AccountsSignUp;
