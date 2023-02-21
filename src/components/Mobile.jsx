import React from "react";

 const Mobile = () => {
  return (
    <div className="container mobile_container">
      <div className="mobile__box">
        <div>
          <h3 className="mobile__title">Mobile applications</h3>
          <div>
            <div>
              <div className="mobile__loads">
                <div className="mobile__loads-img-box">
                  <img
                    src="https://files.ati.su/static/mp/assets/img/loads_app.svg"
                    alt="img"
                  />
                </div>

                <div>
                  <h4 className="mobile__loads-title">
                    <a href="https://ati.su/landings/mobile-apps/#search-app">
                      ATI Loads and Transport
                    </a>
                  </h4>
                  <p className="mobile__loads-text">
                    Find and add loads, send offers, view company ratings
                  </p>

                  <div className="mobile__loads-btn-group">
                    <a
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=su.ati.client.android&referrer=utm_source%3Datisu%26utm_medium%3Dandr_client_service&pli=1"
                      className="mobile__loads-googleplay"
                    >
                      <div className="mobile__loads-googleplay-icon">
                        <img
                          src="https://files.ati.su/static/mp/assets/img/gplay_icon.svg"
                          alt="google-play-icon"
                        />
                      </div>
                      <p>GOOGLE PLAY</p>
                    </a>
                    <a
                      target="_blank"
                      href="https://itunes.apple.com/us/app/%D0%B0%D1%82%D0%B8-%D0%B3%D1%80%D1%83%D0%B7%D1%8B-%D0%B8-%D1%82%D1%80%D0%B0%D0%BD%D1%81%D0%BF%D0%BE%D1%80%D1%82/id1314964094?l=ru&ls=1&mt=8"
                      className="mobile__loads-googleplay"
                    >
                      <div className="mobile__loads-googleplay-icon">
                        <svg
                          baseProfile="full"
                          color="#39444f"
                          fill-rule="evenodd"
                          height="16"
                          version="1.1"
                          viewBox="0 0 13 16"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.858 8.509c.021 2.423 2.117 3.223 2.142 3.232-.013.056-.328 1.157-1.114 2.272-.657.983-1.344 1.945-2.437 1.96-1.06.026-1.418-.624-2.635-.624-1.228 0-1.608.609-2.626.65-1.04.038-1.835-1.049-2.515-2.023C.313 11.987-.745 8.37.674 5.91c.688-1.207 1.942-1.984 3.282-2.004 1.041-.022 2.008.704 2.648.704.628 0 1.823-.868 3.055-.738.515.015 1.982.204 2.928 1.585-.076.046-1.747 1.03-1.729 3.05zM8.854 2.564c-.571.675-1.485 1.191-2.375 1.125-.117-.91.334-1.879.839-2.47C7.888.55 8.879.035 9.672 0c.104.946-.27 1.879-.818 2.564z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      APP STORE
                    </a>
                    <a
                      target="_blank"
                      href="https://appgallery.huawei.com/app/C103847285?sharePrepath=ag&locale=en_US&source=appshare&subsource=C103847285"
                      className="mobile__loads-googleplay"
                    >
                      <div className="mobile__loads-googleplay-icon">
                        <svg
                          fill="none"
                          height="16"
                          viewBox="0 0 16 16"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.5539 0H3.4461C1.54287 0 0 1.54287 0 3.4461V12.5539C0 14.4571 1.54287 16 3.4461 16H12.5539C14.4571 16 16 14.4571 16 12.5539V3.4461C16 1.54287 14.4571 0 12.5539 0Z"
                            fill="#E14459"
                          ></path>
                          <path
                            d="M3.90029 1.04584C3.7796 1.046 3.66391 1.09392 3.57866 1.17906C3.49342 1.26419 3.44559 1.37958 3.44571 1.49984C3.44582 1.62009 3.49386 1.73537 3.57926 1.82035C3.66466 1.90532 3.78042 1.95302 3.90111 1.95296C4.02179 1.95291 4.13752 1.90511 4.22284 1.82006C4.30816 1.73501 4.35609 1.61968 4.3561 1.49943V1.49852C4.35588 1.37827 4.30773 1.26303 4.22226 1.17814C4.13679 1.09324 4.02098 1.04564 3.90029 1.04581V1.04584ZM12.0422 1.04584C11.9215 1.046 11.8058 1.09392 11.7205 1.17906C11.6353 1.26419 11.5875 1.37958 11.5876 1.49984C11.5877 1.6201 11.6358 1.73539 11.7212 1.82037C11.8066 1.90534 11.9224 1.95303 12.0431 1.95296C12.1637 1.95289 12.2794 1.90508 12.3647 1.82004C12.4501 1.73499 12.498 1.61967 12.498 1.49943V1.49852C12.4978 1.37827 12.4496 1.26303 12.3641 1.17813C12.2787 1.09324 12.1629 1.04564 12.0422 1.04581V1.04584Z"
                            fill="#C73148"
                          ></path>
                          <path
                            d="M3.88227 1.43688C3.72408 1.44537 3.73209 1.67545 3.73209 1.67545C4.58223 3.33099 6.14761 4.14303 7.95277 4.14312C9.75554 4.14049 11.3365 3.31949 12.1855 1.66613C12.1855 1.66613 12.2191 1.3548 11.8878 1.46271C11.0171 2.90591 9.55431 3.75968 7.95384 3.76237C6.35033 3.76277 4.89278 2.91797 4.02042 1.47203C3.96408 1.44484 3.91878 1.43493 3.88227 1.43688ZM9.63596 7.87204L9.1523 9.31249L8.68147 7.87311H8.22185L8.96391 9.96695H9.32171L9.80644 8.59147L10.2906 9.96695H10.6514L11.3918 7.87311H10.9437L10.4721 9.31249L9.98842 7.87204H9.63596ZM7.06695 7.87257L6.12849 9.96588H6.56966L6.75083 9.56063L6.76366 9.53001H7.73873L7.92979 9.96588H8.38298L7.45308 7.88481L7.44479 7.87257L7.06695 7.87257ZM13.8633 7.87283V9.96455H14.2898V7.87284L13.8633 7.87283ZM1.63525 7.87309V9.96773H2.06761V9.11706H3.04348V9.96775H3.47584V7.87311H3.04348V8.71821H2.06761V7.87311L1.63525 7.87309ZM5.47648 7.87362V9.07257C5.47648 9.41315 5.30459 9.59497 4.99229 9.59497C4.67822 9.59497 4.50515 9.40807 4.50515 9.05819V7.87498H4.07306V9.0726C4.07306 9.66192 4.40624 9.9997 4.98667 9.9997C5.57262 9.9997 5.90857 9.65542 5.90857 9.05529V7.87364L5.47648 7.87362ZM11.7403 7.8744V9.96613H13.3489V9.58486H12.1665V9.06618H12.9526V8.68467H12.1665V8.256H13.3078V7.87445L11.7403 7.8744ZM7.24999 8.40266L7.55836 9.10398L7.5792 9.15217H6.92559L6.94617 9.10398L7.24999 8.40266Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                      APP GALLERY
                    </a>
                    <a
                      target="_blank"
                      href="https://apps.rustore.ru/app/su.ati.client.android?utm_source=ati&utm_medium=site_plashka"
                      className="mobile__loads-googleplay"
                    >
                      <div className="mobile__loads-googleplay-icon">
                        <svg
                          fill="none"
                          height="16"
                          viewBox="0 0 17 16"
                          width="17"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.37232 14.8753C2.513 16 4.34889 16 8.02068 16H8.66974C12.3415 16 14.1774 16 15.3181 14.8753C16.4587 13.7506 16.4587 11.9404 16.4587 8.31997V7.67998C16.4587 4.05957 16.4587 2.24939 15.3181 1.12467C14.1774 0 12.3415 0 8.66974 0H8.02068C4.34889 0 2.513 0 1.37232 1.12467C0.23169 2.24939 0.231689 4.05957 0.231689 7.67998V8.31997C0.231689 11.9404 0.23169 13.7506 1.37232 14.8753Z"
                            fill="#0077FF"
                          ></path>
                          <path
                            clip-rule="evenodd"
                            d="M12.7591 10.6347L11.6627 10.3646C11.5306 10.3272 11.4374 10.2101 11.4327 10.074L11.2959 6.09498C11.2563 5.56835 10.8598 5.14946 10.4455 5.02613C10.4222 5.01919 10.3974 5.02853 10.3836 5.04826C10.3696 5.06834 10.375 5.09609 10.3945 5.11097C10.4969 5.18909 10.7785 5.44393 10.7785 5.8835L10.7777 11.0859C10.7777 11.5882 10.2962 11.9567 9.79967 11.8344L8.68629 11.5601C8.56286 11.5176 8.47707 11.4042 8.47258 11.2734L8.33578 7.29415C8.29619 6.76752 7.8997 6.34868 7.48539 6.2253C7.46213 6.21841 7.43728 6.2277 7.4235 6.24743C7.40953 6.26751 7.41493 6.29527 7.43443 6.31018C7.53677 6.38827 7.81836 6.6431 7.81836 7.08267L7.81754 11.4192L7.81818 11.4192V12.2856C7.81818 12.7879 7.33671 13.1564 6.84015 13.034L3.69539 12.2595C3.25819 12.1518 2.95166 11.7662 2.95166 11.3239V6.11334C2.95166 5.61102 3.43308 5.2426 3.92964 5.36489L5.91118 5.85298V4.91367C5.91118 4.41135 6.3926 4.04289 6.88916 4.16522L8.87057 4.65326V3.71396C8.87057 3.21164 9.35199 2.84317 9.8486 2.96551L12.9933 3.74008C13.4306 3.84777 13.7371 4.23338 13.7371 4.67566V9.8862C13.7371 10.3885 13.2557 10.7569 12.7591 10.6347Z"
                            fill="white"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      RUSTORE
                    </a>
                  </div>
                </div>
              </div>

              <div className="mobile__loads">
                <div className="mobile__loads-img-box">
                  <img
                    src="https://files.ati.su/static/mp/assets/img/vodila_app.svg"
                    alt="img"
                  />
                </div>

                <div>
                  <h4 className="mobile__loads-title">
                    <a href="https://ati.su/landings/ati-driver/">ATI Driver</a>
                  </h4>
                  <p className="mobile__loads-text">
                    Track transport on the map in real time
                  </p>

                  <div className="mobile__loads-btn-group">
                    <a
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=su.ati.client.android&referrer=utm_source%3Datisu%26utm_medium%3Dandr_client_service&pli=1"
                      className="mobile__loads-googleplay"
                    >
                      <div className="mobile__loads-googleplay-icon">
                        <img
                          src="https://files.ati.su/static/mp/assets/img/gplay_icon.svg"
                          alt="google-play-icon"
                        />
                      </div>
                      <p> GOOGLE PLAY </p>
                    </a>
                    <a
                      target="_blank"
                      href="https://apps.rustore.ru/app/su.ati.client.android?utm_source=ati&utm_medium=site_plashka"
                      className="mobile__loads-googleplay"
                    >
                      <div className="mobile__loads-googleplay-icon">
                        <svg
                          fill="none"
                          height="16"
                          viewBox="0 0 17 16"
                          width="17"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.37232 14.8753C2.513 16 4.34889 16 8.02068 16H8.66974C12.3415 16 14.1774 16 15.3181 14.8753C16.4587 13.7506 16.4587 11.9404 16.4587 8.31997V7.67998C16.4587 4.05957 16.4587 2.24939 15.3181 1.12467C14.1774 0 12.3415 0 8.66974 0H8.02068C4.34889 0 2.513 0 1.37232 1.12467C0.23169 2.24939 0.231689 4.05957 0.231689 7.67998V8.31997C0.231689 11.9404 0.23169 13.7506 1.37232 14.8753Z"
                            fill="#0077FF"
                          ></path>
                          <path
                            clip-rule="evenodd"
                            d="M12.7591 10.6347L11.6627 10.3646C11.5306 10.3272 11.4374 10.2101 11.4327 10.074L11.2959 6.09498C11.2563 5.56835 10.8598 5.14946 10.4455 5.02613C10.4222 5.01919 10.3974 5.02853 10.3836 5.04826C10.3696 5.06834 10.375 5.09609 10.3945 5.11097C10.4969 5.18909 10.7785 5.44393 10.7785 5.8835L10.7777 11.0859C10.7777 11.5882 10.2962 11.9567 9.79967 11.8344L8.68629 11.5601C8.56286 11.5176 8.47707 11.4042 8.47258 11.2734L8.33578 7.29415C8.29619 6.76752 7.8997 6.34868 7.48539 6.2253C7.46213 6.21841 7.43728 6.2277 7.4235 6.24743C7.40953 6.26751 7.41493 6.29527 7.43443 6.31018C7.53677 6.38827 7.81836 6.6431 7.81836 7.08267L7.81754 11.4192L7.81818 11.4192V12.2856C7.81818 12.7879 7.33671 13.1564 6.84015 13.034L3.69539 12.2595C3.25819 12.1518 2.95166 11.7662 2.95166 11.3239V6.11334C2.95166 5.61102 3.43308 5.2426 3.92964 5.36489L5.91118 5.85298V4.91367C5.91118 4.41135 6.3926 4.04289 6.88916 4.16522L8.87057 4.65326V3.71396C8.87057 3.21164 9.35199 2.84317 9.8486 2.96551L12.9933 3.74008C13.4306 3.84777 13.7371 4.23338 13.7371 4.67566V9.8862C13.7371 10.3885 13.2557 10.7569 12.7591 10.6347Z"
                            fill="white"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      RUSTORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile__img">
          <img
            src="https://files.ati.su/static/mp/assets/img/android_iphone.png"
            alt="phone__img"
          />
        </div>
      </div>
      <div className="atiBlock">
        <h2>ATI.SU Partners</h2>
        <div>
          <img
            src="https://files.ati.su/static/mp/assets/img/logo_monochrome_transparent.svg"
            alt="img"
          />
          <a href="#">
            Bridge Capital<span>NEW</span>
          </a>
        </div>
        <div>
          <img
            src="  https://files.ati.su/static/mp/assets/img/potok_partner.png"
            alt="img"
          />
          <a href="#">Potok. Digital</a>
        </div>
        <div>
          <img
            src="	https://files.ati.su/static/mp/assets/img/TruckRadar.png"
            alt="img"
          />
          <a href="#">TruckRadar</a>
        </div>
        <div>
          <img
            src="https://files.ati.su/static/mp/assets/img/papa.png"
            alt="img"
          />
          <a href="#">PapaFinancs</a>
        </div>
        <p>Services for logistics specialists</p>
        <div>
          <img
            src="https://files.ati.su/static/mp/assets/img/4logist.png"
            alt="img"
          />
          <a href="#">4logist</a>
        </div>{" "}
        <div>
          <img
            src="	https://files.ati.su/static/mp/assets/img/TransTrade_logo.svg"
            alt="img"
          />
          <a href="#">Transtrade</a>
        </div>{" "}
        <div>
          <img
            src="	https://files.ati.su/static/mp/assets/img/Logister_logo.svg"
            alt="img"
          />
          <a href="#">Logister</a>
        </div>{" "}
        <div>
          <img
            src="https://files.ati.su/static/mp/assets/img/Klarkk_logo.svg"
            alt="img"
          />
          <a href="#">Klarkk</a>
        </div>
        <p>Verification Services</p>
        <div>
          <img
            src="https://files.ati.su/static/mp/assets/img/Movizor_logo.svg"
            alt="img"
          />
          <a href="#">Movizor</a>
        </div>{" "}
        <div>
          <img
            src="https://files.ati.su/static/mp/assets/img/focus-82.svg"
            alt="img"
          />
          <a href="#">Kontur.Focus</a>
        </div>{" "}
        <div>
          <img
            src="	https://files.ati.su/static/mp/assets/img/Reputation_logo.svg"
            alt="img"
          />
          <a href="#">Reputation</a>
        </div>
        <p>Banks for business</p>
        <div>
          <img
            src="	https://files.ati.su/static/mp/assets/img/Tochka_logo.svg"
            alt="img"
          />
          <a href="#">Bank {"<Tochka>"}</a>
        </div>
      </div>
    </div>
  );
};
export default Mobile;