import React from "react";
import rek1 from "../style/hreklama4.jpg"
import { useState } from "react";
import rek2 from "../style/hreklama3.jpg"
const Hero = () => {
  const [state, setState] = useState(null);

  setInterval(() => {
    const date = new Date().getSeconds();
    if (date % 2 === 0) {
      setState(true);
    } else {
      setState(false);
    }
  }, 1000);
  return (
    <div className="container hero__container">
      <div className="formBlock">
        <div className="formInput">
          <div className="inputBigBlock">
            <div className="inputBlock">
              <div>
                {" "}
                <label className="fromLabel" htmlFor="from">
                  From
                </label>
                <input
                  className="input1"
                  type="search"
                  id="from"
                  placeholder="Enter a city, region, or country"
                />
              </div>
              <input
                className="input2"
                placeholder="radius, km"
                type="number"
                min={0}
              />
            </div>

            <div className="inputBlock">
              <div>
                {" "}
                <label className="fromLabel" htmlFor="from">
                  To
                </label>
                <input
                  className="input1"
                  type="search"
                  id="from"
                  placeholder="Enter a city, region, or country"
                />
              </div>
              <input
                className="input2"
                placeholder="radius, km"
                type="number"
                min={0}
              />
            </div>
            <div>
              <label htmlFor="date">Date</label>
              <input className="input5" value="ss" type="date" id="date" />
            </div>
          </div>
          <div className="buttonBlock">
            <div>
              <button className="btn1">SEARCH LOADS</button>
              <button className="btn2">SEARCH TRUCKS</button>
            </div>
            <button className="btn3">CALCULATE DISTANCE</button>
          </div>
        </div>
        <div className="addBigBlock">
          <div className="addBlock1">
            <h3>Add load for free</h3>
            <p>and get offers from carriers</p>
            <button>
              <span>+</span>ADD LOAD
            </button>
          </div>
          <div className="addBlock2">
            <h3>Add truck for free</h3>
            <p>and receive offers from shippers</p>
            <button>
              <span>+</span>ADD TRUCK
            </button>
          </div>
        </div>
      </div>
      <div className="rekBlockk">
        <div className="faqBlock">
          <ul className="list1">
            <li>
              <a href="#">About ATI.SU</a>
            </li>
            <li>
              <a href="#">Prices and Licenses</a>
            </li>
            <li>
              <a className="linka" href="#">
                FAQ
              </a>
            </li>
          </ul>
          <ul className="list2">
            <li>
              <a href="#">ATI.SU Participants Rating</a>
            </li>
            <li>
              <a href="#">Index ATI.SU</a>
            </li>
            <li>
              <a href="#">Average rates </a>
              <span>NEW</span>
            </li>
          </ul>
        </div>
        <img className="rekkkk" style={{width:"260px", height:"350px"}} src={!state?rek1: rek2} alt="" />
      </div>
    </div>
  );
};

export default Hero;
