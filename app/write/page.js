import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import styles from "./page.module.css";
import Input from "./input";

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
        <Input />
        <div>
          <textarea
            name="content"
            placeholder="글 내용"
            className="write-content"
          ></textarea>
        </div>
        <div className={styles.right}>
          {" "}
          <button className={styles.cancle}>글 취소</button>
          <button className={styles.button} type="submit">
            글 발사
          </button>
        </div>
      </form>
    </div>
  );
}
