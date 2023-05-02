import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Write() {
  let session = await getServerSession(authOptions);
  console.log(session == null);
  console.log(session);
  if (session == null) {
    return (
      <div className="session-plz gallery">
        <div>글 작성은 로그인해야 가능함</div>
      </div>
    );
  } else {
    return (
      <div className="p-20 gallery">
        <h4>글을 작성하시오 </h4>
        <form action="/api/post/new" method="POST">
          <input name="title" placeholder="글 제목" className="write-title" />
          <div>
            <textarea
              name="content"
              placeholder="글 내용"
              className="write-content"
            ></textarea>
          </div>

          <button type="submit">글 싸기</button>
        </form>
      </div>
    );
  }
}
