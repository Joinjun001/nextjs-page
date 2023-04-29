export default function Register() {
  return (
    <div>
      <form method="POST" action="/api/auth/signup">
        <input name="id" type="text" placeholder="아이디"></input>
        <input name="email" type="text" placeholder="이메일"></input>
        <input name="password" type="text" placeholder="비번"></input>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}
