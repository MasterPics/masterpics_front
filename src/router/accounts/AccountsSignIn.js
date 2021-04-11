import "../../css/router/accounts/AccountsSignIn.css";

function AccountsSignIn() {
  return (
    <div className="AccountsSignIn">
      <h1 className="logo">Masterpic's</h1>

      <form>
        <input placeholder="아이디" type="text" name="id" />
        <input placeholder="비밀번호" type="password" name="password" />
        <button type="submit">로그인</button>
      </form>

      <div className="form_more">
        <div className="left">
          <input type="checkbox" className="if_remember_me" />
          <span>ID기억하기</span>
        </div>
        <div className="right">
          <a>아이디/비밀번호 찾기</a>
          <a href="accounts/signup">회원가입</a>
        </div>
      </div>

      <hr />

      <div className="social_login">
        <h2>소셜 로그인</h2>
        <div className="btns_container">
          <button>구글 로그인</button>
          <button>카카오 로그인</button>
          <button>네이버 로그인</button>
        </div>
      </div>
    </div>
  );
}

export default AccountsSignIn;
