import React from "react";
import flagEN from "../img/flag-en.png";
import flagRU from "../img/flag-ru.png";
import path from "../img/path.svg";
import { Link } from "react-router-dom";
const Header = ({ user }) => {
  const [down, setDown] = React.useState(false);
  const [lang, setLang] = React.useState(false);
  const login = () => {
    localStorage.removeItem("user");
  };
  return (
    <div className="header">
      <div className="container">
        <nav className="header__nav d_flex">
          <div className="header__logo-img">
            <img
              src="https://files.ati.su/static/header_assets/img/logo.svg"
              alt="logo"
            />
          </div>
          <ul className="header__list">
            <li className="header__item">
              <a href="#">Loads</a>
            </li>
            <li className="header__item">
              <a href="#">Transport</a>
            </li>
            <li className="header__item">
              <a href="#">Carriers</a>
            </li>
            <li className="header__item">
              <a href="#">Platforms</a>
            </li>
            <li className="header__item">
              <a href="#">Tenders</a>
            </li>
            <li className="header__item">
              <a href="#">Verifications</a>
            </li>
            <li className="header__item">
              <a href="#">ATI-Docs</a>
            </li>
            <li className="header__item d-flex">
              <a href="#">Time Slots</a>
              <span>New</span>
            </li>
            <li className="header__item">
              <p>Truckmarket</p>
            </li>
            <li className="header__item">
              <a href="#">Rating</a>
            </li>
          </ul>
          <div className="header__reg">
            <button
              onClick={() => setDown(!down)}
              className="d-flex select-lang hover-4"
            >
              <div className="lang-img-block-1">
                {lang ? (
                  <img src={flagRU} alt="icon" />
                ) : (
                  <img src={flagEN} alt="icon" />
                )}
              </div>
              {lang ? <p>RU</p> : <p>EN</p>}

              <img
                className={down ? "path-2" : "path-1"}
                src={path}
                alt="icon"
              />
            </button>
            {down ? (
              <div className="header_down-block">
                <button
                  onClick={() => {
                    setLang(false);
                    setDown(false);
                  }}
                  className="header__down-1 lang-hover"
                >
                  <div className="lang-img-block-1">
                    <img src={flagEN} alt="icon" />
                  </div>
                  <p>EN</p>
                </button>
                <button
                  className="header__down-2 lang-hover"
                  onClick={() => {
                    setLang(true);
                    setDown(false);
                  }}
                >
                  <div className="lang-img-block-1 d-flex">
                    <img src={flagRU} alt="icon" />
                  </div>
                  <p>RU</p>
                </button>
              </div>
            ) : (
              ""
            )}

            <div className=" d_flex">
              <Link to="/">
                <button onClick={() => login()} className="header_btn-1">
                  LOG OUt
                </button>
              </Link>
              <div className="loginBlock">
                <img src={user?.user.photoURL} alt="photoUrl" />
                <div>
                  {user.user.displayName} <br />
                  <a target={"_"} href={"mailto:" + user?.user?.email}>
                    {user?.user?.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="header__box">
          <div className="d_flex ">
            <div className="d_flex header__down-item">
              <div className="header__down-box hover-1">
                <p>Your loads</p>
              </div>
              <div className="header__down-box hover-1">
                <svg
                  className="MenuElement__plus-icon___zkDLV"
                  height="16"
                  width="16"
                  data-name="menu-element-plus-icon"
                  color="#39444f"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.516 8.69V7.31H8.69V4.484H7.31V7.31H4.484v1.38H7.31v2.826h1.38V8.69h2.826ZM8 1c1.928 0 3.577.685 4.946 2.054C14.316 4.424 15 6.072 15 8s-.685 3.577-2.054 4.946C11.576 14.316 9.928 15 8 15s-3.577-.685-4.946-2.054C1.684 11.576 1 9.928 1 8s.685-3.577 2.054-4.946C4.424 1.684 6.072 1 8 1Z"
                  ></path>
                </svg>
                <p>Add load</p>
              </div>
            </div>
            <div className="d_flex header__down-item-2">
              <div className="header__down-box hover-2">
                <p>Your trucks</p>
              </div>
              <div className="header__down-box hover-2">
                <svg
                  className="MenuElement__plus-icon___zkDLV"
                  height="16"
                  width="16"
                  data-name="menu-element-plus-icon"
                  color="#39444f"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.516 8.69V7.31H8.69V4.484H7.31V7.31H4.484v1.38H7.31v2.826h1.38V8.69h2.826ZM8 1c1.928 0 3.577.685 4.946 2.054C14.316 4.424 15 6.072 15 8s-.685 3.577-2.054 4.946C11.576 14.316 9.928 15 8 15s-3.577-.685-4.946-2.054C1.684 11.576 1 9.928 1 8s.685-3.577 2.054-4.946C4.424 1.684 6.072 1 8 1Z"
                  ></path>
                </svg>
                <p>Add truck</p>
              </div>
            </div>
            <div className="d_flex header__down-item-3">
              <div className="header__down-box hover-3">
                <p>Orders</p>
              </div>
              <div className="header__down-box hover-3">
                <p>Your platforms</p>
              </div>
            </div>
            <div className="d_flex header__down-item-4">
              <div className="header__down-box hover-3">
                <p>Catalogs</p>
              </div>
              <div className="header__down-box hover-3">
                <p>Add tender</p>
              </div>
            </div>
          </div>
        </div>

        <div className="header__down-box-2">
          <div className="d_flex">
            <div className="header__down-box-3">
              <h3>
                Freight exchange and the largest ecosystem of{" "}
                <span>services</span> <br /> for transport logistics in Russia
                and the CIS
              </h3>
              <p>
                We help to find loads, trusted freight carriers and save money
                by automation of processes
              </p>

              <ul className="d_flex header__box-3">
                <li className="header__down-box-2-item">
                  <div className="d_flex">
                    <h4>1 1330</h4>
                    <p>Index ATI.SU</p>
                  </div>
                  <div className="line"></div>
                  <span>+ 0.6% per week</span>
                </li>
                <li className="header__down-box-2-item">
                  <div className="d_flex">
                    <h4>227 539</h4>
                    <p>loads</p>
                  </div>
                  <div className="line"></div>
                  <span>+ 185 954 today</span>
                </li>
                <li className="header__down-box-2-item">
                  <div className="d_flex">
                    <h4>69 171</h4>
                    <p>trucks</p>
                  </div>
                  <div className="line"></div>
                  <span>+ 25 848 today</span>
                </li>
                <li className="header__down-box-2-item">
                  <div className="d_flex">
                    <h4>332 070</h4>
                    <p>participants</p>
                  </div>
                  <div className="line"></div>
                  <span>+ 791 today</span>
                </li>
                <li className="header__down-box-2-item">
                  <div className="d_flex">
                    <h4>179</h4>
                    <p>tenders</p>
                  </div>
                  <div className="line"></div>
                  <span>+ 116 per week</span>
                </li>
              </ul>
            </div>

            <div className="positon_img-block">
              <div className="d-flex">
                <div className="img__position tooltip">
                  <img
                    src="	https://files.ati.su/static/mp/assets/img/main_page_title/ati-driver.svg"
                    alt="img"
                  />
                  <span className="tooltiptext">GPS-monitoring</span>
                </div>
                <div className="img__position tooltip">
                  <img
                    src="		https://files.ati.su/static/mp/assets/img/main_page_title/boards.svg"
                    alt="img"
                  />
                  <span className="tooltiptext">Platforms</span>
                </div>
                <div className="img__position tooltip">
                  <img
                    src="		https://files.ati.su/static/mp/assets/img/main_page_title/api.svg"
                    alt="img"
                  />
                  <span className="tooltiptext">ATI.SU API</span>
                </div>
              </div>

              <div className="d-flex flex_img-2 ">
                <div className="img__position tooltip tooltip-2">
                  <img
                    src="		https://files.ati.su/static/mp/assets/img/main_page_title/auction.svg"
                    alt="img"
                  />
                  <span className="tooltiptext">Bidding</span>
                </div>
                <div className="img__position tooltip tooltip-2">
                  <img
                    src="		https://files.ati.su/static/mp/assets/img/main_page_title/ati-doki.svg"
                    alt="img"
                  />
                  <span className="tooltiptext">ATI-Docs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

/*          <select className="header__langs" id="lang">
                <option className="en" value="EN">EN</option>
                <option className="ru" value="RU">🚩RU</option>
              </select> */
