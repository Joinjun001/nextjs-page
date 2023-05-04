import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import styles from "./page.module.css";
import Input from "./input";
import Image from "next/image";

export default async function Write() {
  let session = await getServerSession(authOptions);
  return session == null ? (
    <div className="session-plz gallery">
      <Image src={"/pepstudy.jpg"} alt="write image" width={200} height={150} />
      <div>로그인해야 글 쓸수 있습니다</div>
    </div>
  ) : (
    <div className="p-20 gallery">
      <Image src={"/pepstudy.jpg"} alt="write image" width={200} height={150} />
      <span className={styles.write}>글을 쓰세요~</span>
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
