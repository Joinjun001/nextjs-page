import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    const currentDate = new Date();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const MonthDay = `${month}.${day}`;

    const hour = currentDate.getHours().toString().padStart(2, "0"); // get the current hour, convert to string and pad with leading zero if necessary
    const minute = currentDate.getMinutes().toString().padStart(2, "0"); // get the current minute, convert to string and pad with leading zero if necessary
    const second = currentDate.getSeconds().toString().padStart(2, "0"); // get the current second, convert to string and pad with leading zero if necessary
    const formattedTime = `  ${hour}:${minute}:${second}`; // combine the values into a formatted string

    const formattedDate = MonthDay + formattedTime;

    let session = await getServerSession(요청, 응답, authOptions);
    const obj = JSON.parse(요청.body);
    console.log(obj);
    let db = (await connectDB).db("forum");
    let insert = await db.collection("comment").insertOne({
      content: obj.comment,
      author: session.user.email,
      id: session.user.id,
      parent: new ObjectId(obj.parent),
      date: formattedDate,
    });
    let result = await db.collection("comment").findOne({
      _id: insert.insertedId,
    });

    return 응답.status(200).json(result);
  }
}
