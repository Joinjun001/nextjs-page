import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {
  const db = (await connectDB).db("forum"); // forum db에 연결.
  const collection = db.collection("post");
  collection.insertOne(요청.body, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Inserted document with _id: ${result.insertedId}`);
    }

    // 데이터베이스 연결을 종료합니다.
    client.close();
  });
  return 응답.status(200).json(요청.body);
}
