"use client";
import { useEffect, useState } from "react";

export default function Comment({ parent }) {
  let [comment, setComment] = useState("");
  let [cmts, setCmts] = useState([]);

  useEffect(() => {
    fetch(`/api/comment/get?parent=${parent}`, { method: "GET" })
      .then((r) => r.json())
      .then((r) => {
        setCmts(r);
      });
  }, []);
  return (
    <div>
      <div>댓글 쓰셈</div>
      <input
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          if (comment != "") {
            fetch("/api/post/comment", {
              method: "POST",
              body: JSON.stringify({ comment: comment, parent: parent }),
            })
              .then((r) => r.json())
              .then((r) => setCmts([...cmts, r]));
            setComment("");
          }
        }}
      >
        댓글
      </button>
      <hr></hr>
      {cmts.length > 0
        ? cmts.map((obj, i) => {
            return (
              <p key={i}>
                {obj.content} | {obj.author}
              </p>
            );
          })
        : "댓글 없음"}
    </div>
  );
}
