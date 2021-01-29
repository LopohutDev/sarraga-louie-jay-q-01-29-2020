import React from "react";
import HeaderCarousel from "./HeaderCarousel";
import "./Header.css";
import header2 from "../../images/header2.png";
import News from "./News";
import Column from "./Column";
import Map from "./Map";

function Header() {
  return (
    <div>
      <HeaderCarousel />
      <div style={{ height: "10rem" }}></div>
      <div className="solutionscontainer">
        <h1>豊富な法律知識と実績から最善の解決方法をご提案します</h1>
        <p style={{ maxWidth: "50rem" }}>
          税理士は各種税金・税務申告に関する問題をはじめ、
          会社の経理や経営相談、相続に代表されるご家族の悩みなどを相談できる専門家です。
          相続問題、独立・起業をお考えの方へのサポート、法人・個人事業主様の税務申告・
          会計業務と経営支援を業務の中心として取り組んでおります。
          フットワーク軽く、一緒に考え、一緒に悩み、皆様の不安を解決して参ります。
          一人で悩まず、まずはご相談下さい。
        </p>
      </div>
      <div
        style={{ backgroundImage: `url(${header2})` }}
        className="header2"
      ></div>
      <News />
      <Column />
      <div className="achievementscontainer">
        <h1>豊富な法律知識と実績から最善の解決方法をご提案します</h1>
        <p style={{ maxWidth: "50rem" }}>
          税理士は各種税金・税務申告に関する問題をはじめ、
          会社の経理や経営相談、相続に代表されるご家族の悩みなどを相談できる専門家です。
          相続問題、独立・起業をお考えの方へのサポート、法人・個人事業主様の税務申告・
          会計業務と経営支援を業務の中心として取り組んでおります。
          フットワーク軽く、一緒に考え、一緒に悩み、皆様の不安を解決して参ります。
          一人で悩まず、まずはご相談下さい。
        </p>
        <button
          style={{
            paddingRight: "5rem",
            paddingLeft: "5rem",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            border: "none",
            backgroundColor: " #e39300",
            color: "white",
          }}
        >
          お問い合わせはこちら &gt;
        </button>
        <Map />
      </div>
    </div>
  );
}

export default Header;
