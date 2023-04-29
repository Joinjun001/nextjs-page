import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  return (
    <div className="p-20">
      <h4>글 수정하셈</h4>
      <form action="/api/post/modify" method="POST">
        <input type="hidden" name="_id" value={result._id.toString()} />
        <input name="title" defaultValue={result.title} />
        <input name="content" defaultValue={result.content} />
        <button type="submit">수정하셈</button>
      </form>
    </div>
  );
}
