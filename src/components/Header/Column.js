import React from "react";
import ColumnData from "./Data/ColumnData";

import col1 from "../../images/col1.png";
import col2 from "../../images/col2.png";
import col3 from "../../images/col3.png";
import col4 from "../../images/col4.png";
import col5 from "../../images/col5.png";
import col6 from "../../images/col6.png";
function Column() {
  return (
    <div style={{ maxWidth: " 80rem", margin: "auto", marginTop: "2rem" }}>
      <h1 style={{ fontFamily: "times new roman" }}>COLUMN</h1>
      <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
        <ColumnData
          paragraphs1="2016.05.20"
          paragraphs2="原稿はダミーです。テキストテキストテキストテキストキストテキスト。"
          columnImg={col1}
        />
        <ColumnData
          paragraphs1="2016.05.20"
          paragraphs2="
          原稿はダミーです。テキストテキストテキストテキストキストテキスト。"
          columnImg={col2}
        />
        <ColumnData
          paragraphs1="2016.05.20"
          paragraphs2="
          原稿はダミーです。テキストテキストテキストテキストキストテキスト。"
          columnImg={col3}
        />
        <ColumnData
          paragraphs1="2016.05.20"
          paragraphs2="
          原稿はダミーです。テキストテキストテキストテキストキストテキスト。"
          columnImg={col4}
        />
        <ColumnData
          paragraphs1="2016.05.20"
          paragraphs2="
          原稿はダミーです。テキストテキストテキストテキストキストテキスト。"
          columnImg={col5}
        />
        <ColumnData
          paragraphs1="2016.05.20"
          paragraphs2="
          原稿はダミーです。テキストテキストテキストテキストキストテキスト。"
          columnImg={col6}
        />
      </div>
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

export default Column;
