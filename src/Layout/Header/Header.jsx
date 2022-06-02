import React from "react";
import "./Header.css";
import menu from "../../Assets/Menu.svg";
import windowimg from "../../Assets/Windows.svg";
function Header({ accounts, setAccounts }) {
  async function connectAccount() {
    if (window.ethereum) {
      //check if Metamask is installed
      console.log("Request Account");
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(account);
    } else {
      console.log("Please install metamask");
    }
  }


  return (
    <div className="head-cont">
      <div className="header">
        <div className="top-header">
          <img src={menu} alt="" className="menu" />
          <div className="pattern"></div>
          <img src={windowimg} alt="" className="window" />
        </div>
        <div className="bottom-header">
          <div className="left-bottom-header">
            <a href="#mint-section" className="nav-links">
              Mint
            </a>
            <a href={"#"} className="nav-links">
              Stake
            </a>
            <label className="nav-links" onClick={connectAccount}>
              Connect Wallet
            </label>
          </div>
          {/* <div>
          <button className="nav-links" onClick={connectAccount}>
              Connect Wallet
            </button>
          </div> */}
          <div className="right-bottom-header">
            <h1>$AVAX: 33.75</h1>
            <h1>$EGG: .439</h1>
            <h1>$FERT: .061</h1>
            <h1>GAS: 31</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
