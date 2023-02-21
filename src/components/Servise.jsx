import React, { useEffect, useState } from "react";
import { useRef } from "react";
const Servise = () => {
  const [state, setState] = useState(false);
  const count1 = useRef();
  const count2 = useRef();
  const count3 = useRef();
  const count4 = useRef();
  const count5 = useRef();
  const count6 = useRef();
  const count7 = useRef();
  useEffect(()=>{
setState(true)
  count1.current.style.display = "none";
  count2.current.style.display = "none";
  count3.current.style.display = "none";
  count4.current.style.display = "none";
  count5.current.style.display = "none";
  count6.current.style.display = "none";
  count7.current.style.display = "block";
  },[])

  const showMore = () => {
    if (!state) {
      count1.current.style.display = "none";
      count2.current.style.display = "none";
      count3.current.style.display = "none";
      count4.current.style.display = "none";
      count5.current.style.display = "none";
      count6.current.style.display = "none";
      count7.current.style.display = "block";

    } else {
      count1.current.style.display = "block";
      count2.current.style.display = "block";
      count3.current.style.display = "block";
      count4.current.style.display = "block";
      count5.current.style.display = "block";
      count6.current.style.display = "block";
      count7.current.style.display = "none";
    }
  };
  return (
    <div className="container serCon">
      <div className="container servise__container">
        <h2>Services</h2>
        <div className="serviseBlockLeft">
          <div className="block1">
            <div className="littleBlock">
              <h3 className="title">Traffic light+</h3>
              <p className="text">
                Auto verification counterparties and&nbsp;participants
                of&nbsp;ATI.SU
              </p>
              <button className="btn">CHECK THE FIRM</button>
            </div>
            <img
              src="	https://files.ati.su/static/mp/assets/img/semaphore.svg"
              alt="img"
            />
          </div>
          <div className="block1">
            <div className="littleBlock">
              <h3 className="title">Freight Tendering</h3>
              <p className="text">
                Auto verification counterparties and&nbsp;participants
                of&nbsp;ATI.SU
              </p>
              <button className="btn">FIND TENDER</button>
            </div>
            <img
              src="		https://files.ati.su/static/mp/assets/img/contracts.svg"
              alt="img"
            />
          </div>{" "}
          <div className="block1">
            <div className="littleBlock">
              <h3 className="title">Insurance</h3>
              <p className="text">
                Auto verification counterparties and&nbsp;participants
                of&nbsp;ATI.SU Lorem ipsum dolor sit amet.
              </p>
              <button className="btn">CHOOSE AN INSURANCE</button>
            </div>
            <img
              src="	https://files.ati.su/static/mp/assets/img/insuranse.svg"
              alt="img"
            />
          </div>{" "}
          <div className="block1">
            <div className="littleBlock">
              <h3 className="title">Verification</h3>
              <p className="text">
                Auto verification counterparties and&nbsp;participants
                of&nbsp;ATI.SU Lorem ipsum dolor sit amet consectetur.
              </p>
              <button className="btn">CHOOSE VERIFICATION</button>
            </div>
            <img
              src="	https://files.ati.su/static/mp/assets/img/check.svg"
              alt="img"
            />
          </div>{" "}
          <div className="block1">
            <div className="littleBlock">
              <h3 className="title">
                GPS monitoring <span>NEW</span>
              </h3>
              <p className="text">
                Auto verification counterparties and&nbsp;participants
                of&nbsp;ATI.SU
              </p>
              <button className="btn">START USING</button>
            </div>
            <img
              src="	https://files.ati.su/static/mp/assets/img/tracking.svg"
              alt="img"
            />
          </div>{" "}
          <div className="block1">
            <div className="littleBlock">
              <h3 className="title">Boards</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt voluptates
              </p>
              <button className="btn">HOW TO CREATE A BOARD</button>
            </div>
            <img
              src="		https://files.ati.su/static/mp/assets/img/playground.svg"
              alt="img"
            />
          </div>{" "}
          <div ref={count7} className="blur"></div>
          <div ref={count1} className="block1">
            <div className="littleBlock">
              <h3 className="title">
                The Real carrier <span>NEW</span>
              </h3>
              <p className="text">
                Auto verification counterparties and&nbsp;participants
                of&nbsp;ATI.SU
              </p>
              <button className="btn">MORE</button>
            </div>
            <img
              src="	https://files.ati.su/static/mp/assets/img/real_carrier.svg"
              alt="img"
            />
          </div>{" "}
          <div ref={count2} className="block1">
            <div className="littleBlock">
              <h3 className="title">Orders</h3>
              <p className="text">
                Auto verification counterparties and&nbsp;participants
                of&nbsp;ATI.SU
              </p>
              <button className="btn">HOW TO CREATE ORDER</button>
            </div>
            <img
              src="	https://files.ati.su/static/mp/assets/img/order.svg"
              alt="img"
            />
          </div>{" "}
          <div ref={count3} className="block1">
            <div className="littleBlock">
              <h3 className="title">
                Active Carrier <br /> Search <span>NEW</span>
              </h3>
              <p className="text">Auto verification counterparties</p>
              <button className="btn">LEARN MORE</button>
            </div>
            <img
              src="	https://files.ati.su/static/mp/assets/img/active_carrier.svg"
              alt="img"
            />
          </div>{" "}
          <div ref={count4} className="block1">
            <div className="littleBlock">
              <h3 className="title">Distance calculator</h3>
              <p className="text">Auto verification counterparties transpotr</p>
              <button className="btn">CALCULATE A ROUTE</button>
            </div>
            <img
              src="	https://files.ati.su/static/mp/assets/img/route.svg"
              alt="img"
            />
          </div>{" "}
          <div ref={count5} className="block1">
            <div className="littleBlock">
              <h3 className="title">
                Counter Verification <span>NEW</span>
              </h3>
              <p className="text">
                Auto verification counterparties and&nbsp;participants
                of&nbsp;ATI.SU
              </p>
              <button className="btn">LEARN MORE</button>
            </div>
            <img
              src="	https://files.ati.su/static/mp/assets/img/counterparty_verification.svg"
              alt="img"
            />
          </div>{" "}
          <div ref={count6} className="block1">
            <div className="littleBlock">
              <h3 className="title">ATI-Docs</h3>
              <p className="text">
                Auto verification counterparties and&Lorem ipsum dolor sit amet
                consectetur adipisicing.
              </p>
              <button className="btn">CREATE A DOCUMENT</button>
            </div>
            <img
              src="	https://files.ati.su/static/mp/assets/img/docs.svg"
              alt="img"
            />
          </div>
          <button
            onClick={() => showMore(setState(!state))}
            className="showMore"
          >
            {state ? " All service" : "Hide"}
          </button>
        </div>
      </div>
      <div className="rightBlock">
        <p className="text1">TRUCKMARKET</p>
        <p className="titleBlock">
          <a href="#">Rent </a> and <a href="#">sale</a> of vehicles and special
          machinery
        </p>
        <div className="block">
          <img
            src="https://tm.ati.su/files/photos/2021/05/26/2350208/sm_cy1w2se2.jpg"
            alt="img"
          />
          <div className="textBlock">
            <h3>Kassbohrer</h3>
            <p>34 t., 31.5 m3, 2007 y., 1 000 km ...</p>
            <strong>1 950 000 rub.</strong>
          </div>
        </div>
        <div className="block">
          <img
            src="https://tm.ati.su/files/photos/2021/01/12/1110544/sm_wzna1yfm.jpg"
            alt="img"
          />
          <div className="textBlock">
            <h3>Koniki</h3>
            <p>34 t., 31.5 m3, 2007 y., 1 000 km ...</p>
            <strong>1 70 000 rub.</strong>
          </div>
        </div>
        <div className="block">
          <img
            src="https://tm.ati.su/files/photos/2023/02/17/3131287/sm_q2decfl1.jpg"
            alt="img"
          />
          <div className="textBlock">
            <h3>Volvo</h3>
            <p>34 t., 31.5 m3, 2007 y., 1 000 km ...</p>
            <strong>1 750 000 rub.</strong>
          </div>
        </div>
        <button className="btnAll">All advertisements</button>
      </div>
    </div>
  );
};

export default Servise;
