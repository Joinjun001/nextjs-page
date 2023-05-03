"use client";

import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <div>
      {result.map((a, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`/detail/${result[i]._id}`}>
              <div className="result-parent">
                <div className="result-title">📄 {result[i].title}</div>
                <div className="result-nickname">{result[i].nickname}</div>
                <div className="result-date">{result[i].date}</div>
                <div className="result-like">{result[i].like}</div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
