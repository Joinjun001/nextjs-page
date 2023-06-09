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
        <div className="gallery">로그인하면 글을 작성할수 있습니다.</div>
      )}
    </div>
  );
}
