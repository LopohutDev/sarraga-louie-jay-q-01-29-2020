import React from "react";
import Carousel from "react-multi-carousel";
import "./Header.css";
import "react-multi-carousel/lib/styles.css";
import HeaderCards from "./Data/HeaderCards";
import icon1 from "../../images/icon3.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon1.png";

function HeaderCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="carouselcontainer">
      <Carousel responsive={responsive} infinite="true" className="carousel">
        <div className="carouselphoto"></div>
        <div className="carouselphoto"></div>
      </Carousel>
      <div className="cardscontainer">
        <HeaderCards
          bgcolor="#00437c"
          title="相続税のお悩み"
          para1="どのくらいの税額？"
          para2="売却したい"
          para3="売却したい"
          icon={icon1}
        />
        <HeaderCards
          bgcolor="#005ca2"
          title="顧問契約"
          para1="個人→法人化する"
          para2="経営に関する税務をサポート"
          icon={icon2}
        />
        <HeaderCards
          bgcolor="#0075b6"
          title="よくあるご質問"
          para1="原稿はダミーです。"
          para2="ダミーですダミーです。"
          para3="ダミーです。"
          icon={icon3}
        />
      </div>
    </div>
  );
}

export default HeaderCarousel;
