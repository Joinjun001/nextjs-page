import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(request, response) {
  if (request.method == "POST") {
    // Connect to database
    let db = (await connectDB).db("forum");

    // Check if email is valid
    let emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(request.body.email)) {
      return response.status(500).json("이메일 이상하게씀~");
    }

    // Check if password meets requirements
    let passwordRegex = /^(?=.*\d)(?=.*[a-z]).{8,}$/;
    if (!passwordRegex.test(request.body.password)) {
      return response
        .status(500)
        .json(
          "비번은 소문자,숫자를 포함한 8글자 이상이어야합니다 안그러면 님 아이디 털림."
        );
    }

    // Check if ID meets requirements
    let idRegex = /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]{2,8}$/;
    if (!idRegex.test(request.body.id)) {
      return response
        .status(500)
        .json("닉네임은 특수문자 안되고, 2~8글자 안에서 만들어주세요");
    }

    // Check if user already exists
    let isExisted = await db
      .collection("user_cred")
      .findOne({ email: request.body.email });
    if (isExisted) {
      return response.status(500).json("이메일 중복이래요");
    }

    // Hash password and add user to database
    let hash = await bcrypt.hash(request.body.password, 10);
    request.body.password = hash;
    request.body.role = "normal";
    if (request.body.id.length > 20) {
      request.body.id = request.body.id.substring(0, 20);
    }
    await db.collection("user_cred").insertOne(request.body);

    // Redirect to list page
    return response.status(400).redirect("/ok");
  }
}
