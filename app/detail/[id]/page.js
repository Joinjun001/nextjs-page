import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Like from "./Like";

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
  console.log(result);
  return (
    <div>
      <h2>페이커 갤러리</h2>
      <hr></hr>
      <h3>{result.title}</h3>
      <h5>{result.author}</h5>
      <hr></hr>
      <br></br>
      <h4>{result.content}</h4>
      <div>
        <Like write={result._id} user={session.user.email} like={result.like} />
      </div>
      <hr></hr>
      <Comment parent={result._id} />
    </div>
  );
}
