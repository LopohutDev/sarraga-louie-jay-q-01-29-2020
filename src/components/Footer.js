import React from "react";
import Logo from "../images/Logo.png";

function Footer() {
  return (
    <div style={{ backgroundColor: "#e6ebee" }}>
      <div className="footercontainer">
        <div className="footerbuttoncontainer">
          <button className="footerbutton">相続のご相談</button>
          <button className="footerbutton">顧問税理士をお探しの方</button>
          <button className="footerbutton">ご依頼の流れ</button>
          <button className="footerbutton">よくあるご質問</button>
          <button className="footerbutton">事務所案内</button>
          <button className="footerbutton">お問い合わせ</button>
          <button className="footerbutton">プライバシーポリシー</button>
          <button className="footerbutton">コラム</button>
        </div>
        <div className="footerlogo">
          <img src={Logo} alt="footer" />
          <div>
            <p>〒180-0002　東京都武蔵野市吉祥寺東町1丁目1番18号</p>
            <p>TEL 0422-21-3611</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
