import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    const db = (await connectDB).db("forum");
    let result = await db
      .collection("post")
      .findOne({ _id: new ObjectId(요청.body.write_id) });
    console.log(result);

    return 응답.status(200).json("응답완료");
  }
}
