"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h4>모종의 이유로 에러가 났습니다...루뚱뚱 </h4>
      <h4>{error}</h4>
      <button
        onClick={() => {
          reset();
        }}
      >
        환생버튼
      </button>
    </div>
  );
}
