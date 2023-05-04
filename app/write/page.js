import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Write() {
  let session = await getServerSession(authOptions);
  return session == null ? (
    <div className="session-plz gallery">
      <div>로그인해야 글 쓸수 있습니다</div>
    </div>
  ) : (
    <div className="p-20 gallery">
      <h4>글을 싸시오 </h4>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="post title" className="write-title" />
        <div>
          <textarea
            name="content"
            placeholder="text content"
            className="write-content"
          ></textarea>
        </div>

        <button type="submit">Text</button>
      </form>
    </div>
  );
}
