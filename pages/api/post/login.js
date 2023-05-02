import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("user")
    .findOne({ user_id: 요청.body.user_id });
  console.log(result.user_id);
  if (요청.method == "POST") {
    if (요청.body.user_id == "") {
      return 응답.status(500).json("님아 아이디 빈칸 보냄");
    }
    if (요청.body.user_id == result.user_id) {
      return 응답.status(500).json("님아 그 아이디 중복임 ");
    }
    try {
      // await db.collection("user").insertOne(요청.body);
    } catch (error) {
      console.log(error);
    }
    return 응답
      .status(200)
      .json(
        `회원가입성공했음 아이디: ${요청.body.user_id} 비번: ${요청.body.password}`
      );
  }
}
