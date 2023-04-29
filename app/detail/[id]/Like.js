"use client";

import { useState } from "react";

export default function Like({ write, user, like }) {
  const [개추, set개추] = useState(like);
  return (
    <button
      onClick={() => {
        fetch("/api/comment/like", {
          method: "POST",
          body: JSON.stringify({ write: write, user: user }),
        })
          .then((r) => r.json())
          .then((r) => set개추(r));
      }}
    >
      개추 ({개추})
    </button>
  );
}
