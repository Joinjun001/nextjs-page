import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    const db = (await connectDB).db("forum");
    let data = JSON.parse(요청.body);
    let find = await db
      .collection("post")
      .findOne({ _id: new ObjectId(data.write) });
    if (find.like_id.indexOf(data.user) == -1) {
      let result = await db
        .collection("post")
        .updateOne(
          { _id: new ObjectId(data.write) },
          { $inc: { like: 1 }, $push: { like_id: data.user } }
        );
      return 응답.status(200).json(find.like + 1); // 업데이트 안된 숫자이므로 +1 해서 보내줌
    } else {
      return 응답.status(200).json(find.like);
    }
  }
}
