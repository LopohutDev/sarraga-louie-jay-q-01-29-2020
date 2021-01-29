import React from "react";

function News() {
  return (
    <div style={{ maxWidth: " 80rem", margin: "auto", marginTop: "2rem" }}>
      <h1 style={{ fontFamily: "times new roman" }}>NEWS</h1>
      <p>
        2016.05.20　原稿はダミーです。テキストテキストテキストテキストテキストテキストテキストテキスト。
      </p>
      <p>
        2016.05.20　テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキ原稿はダミーです。
      </p>
      <p>
        2016.05.20　テキストテキストテキストテキストテキストテキストテキ原稿はダミーです。
      </p>
      <div className="buttoncontainer">
        <button
          style={{
            paddingTop: "0.2rem",
            paddingBottom: "0.2rem",
            paddingRight: "1.5rem",
            paddingLeft: "1.5rem",
            border: "none",
            fontSize: "1.125rem",
            color: "white",
            backgroundColor: "#727171",
          }}
        >
          もっと見る &gt;
        </button>
      </div>
    </div>
  );
}

export default News;
