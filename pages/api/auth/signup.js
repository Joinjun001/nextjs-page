import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    let db = (await connectDB).db("forum");
    let isExisted = await db
      .collection("user_cred")
      .findOne({ email: 요청.body.email });
    let hash = await bcrypt.hash(요청.body.password, 10);
    요청.body.password = hash;
    요청.body.role = "normal";
    console.log(요청.body.id);
    if (
      요청.body.id == "" ||
      요청.body.email == "" ||
      요청.body.password == ""
    ) {
      return 응답.status(500).json("아이디, 이메일, 비번에 빈문자 보내지마셈");
    }
    if (isExisted) {
      return 응답.status(500).json("님 이메일 중복임");
    }
    await db.collection("user_cred").insertOne(요청.body);
    응답.status(302).redirect("/list");
  }
}
