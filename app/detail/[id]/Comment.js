"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

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
      <input
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
        className={styles.input}
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
              <div key={i}>
                <span className={styles.commentID}>{obj.id}</span>
                <span className={styles.comment}>{obj.content}</span>
                <span className={styles.date}>{obj.date}</span>
                <hr></hr>
              </div>
            );
          })
        : "첫 댓글의 영광을 누릴수 있음"}
    </div>
  );
}
