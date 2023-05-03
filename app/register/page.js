export default function Register() {
  return (
    <div className="p-20 gallery">
      <form method="POST" action="/api/auth/signup">
        <h4>닉네임은 아무거나하셈 특수문자안되고 2글자~8글자 써주세요</h4>
        <input name="id" type="text" placeholder="닉네임"></input>
        <h4>이메일 쓰세요 로그인할때 필요함</h4>
        <input name="email" type="text" placeholder="이메일"></input>
        <h4>비번은 대문자 소문자 특수문자 다 되고, 8~20글자해주세요</h4>
        <input name="password" type="text" placeholder="비번"></input>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}
