export default function User() {
  return (
    <div>
      <form action="/api/user/login" method="POST">
        <input name="user_id" placeholder="아이디"></input>
        <input name="password" placeholder="비밀번호"></input>
        <button type="submit">유어 마이 회원</button>
      </form>
    </div>
  );
}
