import "../../css/router/accounts/AccountsForget.css";

function AccountsForget({ history }) {
  console.log(history);
  return (
    <div className="AccountsForget">
      <div>
        <h2>비밀번호를 잊어버리셨나요?</h2>
        <h4>
          메일 주소를 입력하면 비밀번호를 재설정할 수 있는 이메일이 전송됩니다.
        </h4>
      </div>

      <form>
        <label>이메일</label>
        <input type="email" />
        <button type="submit">이메일 전송</button>
        <button
          type="button"
          onClick={() => {
            history.goBack();
          }}
        >
          취소
        </button>
      </form>

      <span>
        암호를 재설정하는 데 문제가 발생하면 문의하기를 통해 문의주세요.
      </span>
    </div>
  );
}

export default AccountsForget;
