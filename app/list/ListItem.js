"use client";

import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <div>
      {result.map((a, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`/detail/${result[i]._id}`}>
              <h4>{result[i].title}</h4>
            </Link>
            <Link href={`/modify/${result[i]._id}`}>✏️</Link>
            <span
              onClick={(event) => {
                fetch(
                  `/api/post/delete?id=${result[i]._id}&user=${result[i].author}`,
                  {
                    method: "DELETE",
                  }
                ).then(() => {
                  event.target.parentElement.style.opacity = 0;
                  setTimeout(() => {
                    event.target.parentElement.style.display = "none";
                  }, 1000);
                });
              }}
            >
              ❌
            </span>

            <p>{result[i].content}</p>
          </div>
        );
      })}
    </div>
  );
}
