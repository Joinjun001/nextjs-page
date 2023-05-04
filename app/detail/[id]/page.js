import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Like from "./Like";
import styles from "./page.module.css";

export default async function Detail(props) {
  let session = await getServerSession(authOptions);

  let objectId = props.params.id;
  if (typeof objectId !== "string") {
    objectId = JSON.parse(JSON.stringify(objectId));
  }
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(objectId) });
  return (
    <div className="gallery">
      <div className={styles.width}>
        <h2>페이커 갤러리</h2>
        <hr className="hr-bold"></hr>
      </div>

      <h3>{result.title}</h3>
      <div className={styles.block}>
        <span className={styles.nickname}>{result.nickname}</span>
        <span className={styles.bar}>|</span>
        <span className={styles.nickname}>{result.date}</span>
        <span className={styles.like}>개추 {result.like}</span>
      </div>

      <hr></hr>
      <br></br>
      <h4>{result.content}</h4>
      <div>
        {session ? (
          <Like
            write={result._id}
            user={session.user.email}
            like={result.like}
          />
        ) : (
          <div>로그인 해야 개추 가능</div>
        )}
      </div>
      <hr className="hr-bold"></hr>
      <Comment parent={result._id} />
    </div>
  );
}
