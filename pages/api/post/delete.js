import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
  if ((요청.method = "DELETE")) {
    let session = await getServerSession(요청, 응답, authOptions);
    if (!session) {
      return 응답.status(500).json("로그인 안됨");
    }
    const db = (await connectDB).db("forum");
    let findOne = await db
      .collection("post")
      .findOne({ _id: new ObjectId(요청.query.id) });

    if (session.user.role == "admin") {
      let result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(요청.query.id) });

      return 응답.status(200).json("삭제완료");
    }

    if (findOne.author == session.user.email) {
      let result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(요청.query.id) });

      return 응답.status(200).json("삭제 완료");
    } else {
      return 응답.status(500).json("현재 유저와 작성자 불일치 ");
    }
  }
}
