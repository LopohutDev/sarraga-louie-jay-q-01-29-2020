import React from "react";
import Logo from "../../images/Logo.png";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Number from "../../images/number.png";

function Navbar() {
  return (
    <nav>
      <div className="navbar-main">
        <div className="hamburger">
          <GiHamburgerMenu style={{ fontSize: "2rem" }} />
        </div>
        <div className="nav-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="nav-width">
          <div className="navbar-number">
            <div>
              <img src={Number} alt="number" />
            </div>
            <button className="nav-yellow-button">
              まずは無料相談・お問い合わせ{""} &gt;
            </button>
          </div>
          <div className="navbar-button">
            <button className="nav-buttons">相続のご相談</button>
            <button className="nav-buttons">顧問税理士をお探しの方</button>
            <button className="nav-buttons">ご依頼の流れ</button>
            <button className="nav-buttons-active">よくあるご質問</button>
            <button className="nav-buttons">事務所案内</button>
            <button className="nav-buttons">お問い合わせ</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
