"use client";

import { useEffect } from "react";

export default function Input() {
  useEffect(() => {
    const input = document.querySelector("#input");

    function handleKeyDown(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
    }

    input.addEventListener("keydown", handleKeyDown);

    return () => {
      input.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <input
        id="input"
        name="title"
        placeholder="글 제목"
        className="write-title"
      />
    </div>
  );
}
