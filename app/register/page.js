import Image from "next/image";

export default function Register() {
  return (
    <div className="p-20 gallery">
      <Image src={"/kermit2.jpg"} width={300} height={200} alt="kermit hello" />
      <form method="POST" action="/api/auth/signup">
        <h4>닉네임은 특수문자안되고 2글자~8글자 써주세요</h4>
        <input name="id" type="text" placeholder="닉네임"></input>
        <h4>이메일 쓰세요 로그인할때 필요함</h4>
        <input name="email" type="text" placeholder="이메일"></input>
        <h4>비번은 8글자이상으로 소문자 숫자 하나씩 포함되야함</h4>
        <input
          style={{ marginBottom: 20 }}
          name="password"
          type="text"
          placeholder="비번"
        ></input>
        <button className="button" type="submit">
          회원가입
        </button>
      </form>
    </div>
  );
}
