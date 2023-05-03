import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import List from "./list/page";

export default async function Home() {
  let session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      {session ? (
        <div>
          <List></List>
        </div>
      ) : (
        <div className="gallery">
          아직 개발초기라 로그인안하면 에러가 개많이 납니다. 회원가입눌러서
          로그인부터 해주세요..
        </div>
      )}
    </div>
  );
}
