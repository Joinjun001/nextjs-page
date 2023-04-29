import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    let session = await getServerSession(요청, 응답, authOptions);
    const obj = JSON.parse(요청.body);
    console.log(obj);
    let db = (await connectDB).db("forum");
    let insert = await db.collection("comment").insertOne({
      content: obj.comment,
      author: session.user.email,
      parent: new ObjectId(obj.parent),
    });
    let result = await db.collection("comment").findOne({
      _id: insert.insertedId,
    });

    return 응답.status(200).json(result);
  }
}
