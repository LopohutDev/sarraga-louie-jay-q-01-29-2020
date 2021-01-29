import React from "react";
import map from "../../images/map.png";

function Map() {
  return (
    <div style={{ textAlign: "left", marginTop: "2rem" }}>
      <p>アクセス</p>
      <div
        style={{
          backgroundImage: `url(${map})`,
        }}
        className="map"
      ></div>
      <p>JR線「吉祥寺駅」から徒歩7分</p>
    </div>
  );
}

export default Map;
