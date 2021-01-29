import React from "react";

function ColumnData({ paragraphs1, paragraphs2, columnImg }) {
  return (
    <div className="columncontainer">
      <div
        className="columnimage"
        style={{
          backgroundImage: `url(${columnImg})`,
        }}
      ></div>
      <div>
        <p>{paragraphs1}</p>
        <p>{paragraphs2}</p>
      </div>
    </div>
  );
}

export default ColumnData;
