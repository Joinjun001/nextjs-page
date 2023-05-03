export default function ListView() {
  return (
    <div style={{ width: 1000 }}>
      <hr className="hr-bold"></hr>
      <span style={{ marginLeft: 300, marginRight: 350 }} className="font-bold">
        제목
      </span>
      <span className="font-bold">글쓴이</span>
      <span style={{ marginLeft: 110 }} className="font-bold">
        작성일
      </span>
      <span style={{ marginLeft: 50 }} className="font-bold">
        추천
      </span>
      <hr></hr>
    </div>
  );
}
