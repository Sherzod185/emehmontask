import React from "react";
import { useState } from "react";
import rek1 from "../style/hreklama1.jpg"
import rek2 from "../style/hreklama2.jpg";
 const News = () => {
  const [state, setState]=useState()
    setInterval(() => {
      const date = new Date().getSeconds();
      if (date % 2 === 0) {
        setState(true);
      } else {
        setState(false);
      }
    }, 3000);
  return (
    <div className="news_container container">
      <div className="news">
        <div className="news__header">
          <a href="https://news.ati.su/index/">
            <h2 className="news__title">Новости</h2>
          </a>
          <span className="news__title-desc">21 Февраля 2023</span>
        </div>

        <div className="newx__new-box">
          <a
            href="https://zen.ati.su/article/2023/02/20/deshevle-uzhe-ne-budet-rukovoditel-avtoservisa-o-roste-tsen-na-zapchasti-kitajskih-gruzovikah-i-berezhnoj-ezde-479744/?_ga=2.59054637.161220696.1676892270-323178278.1676892270"
            className="news__main-new"
          >
            <img
              className="new__main-new-img"
              src="https://zen.ati.su/images/2023/02/18/md_tirdmtrw.jpg"
              data-real-src="https://zen.ati.su/images/2023/02/18/md_tirdmtrw.jpg"
              alt="«Дешевле уже не будет»: руководитель автосервиса о росте цен на запчасти, китайских грузовиках и бережной езде"
            />

            <h3 className="news__main-new-title">
              «Дешевле ужене будет»: руководитель автосервиса оросте ценна
              запчасти, китайских грузовиках ибережной езде
            </h3>
            <div className="news__main-new-desc">
              Руководитель автосервиса «ДизельМастерПитер» рассказывает, как
              отрасль пережила санкционный кризис и что сподвигло его компанию
              на переезд.
            </div>
          </a>

          <div className="news__box">
            <a
              href="https://zen.ati.su/article/2023/02/15/avtopark-po-podpiske-chto-delat-esli-malotonnazhnik-nuzhen-zdes-i-sejchas-772926/"
              className="news__two"
            >
              <img
                className="news__two-img"
                src="https://zen.ati.su/images/2023/02/16/sm_11dh0idu.jpg"
                data-real-src="https://zen.ati.su/images/2023/02/16/sm_11dh0idu.jpg"
                alt="Автопарк по подписке: что делать, если малотоннажник нужен здесь и сейчас"
              />

              <h3 className="news__two-title">
                Автопарк поподписке: чтоделать, если малотоннажник нужен здесь
                исейчас
              </h3>
            </a>
            <a
              href="https://zen.ati.su/article/2023/02/20/dolgozhdannyj-rost-stavok-problemy-s-platonom-i-zakrytie-dorog-v-sibiri-682156/"
              className="news__two news__three"
            >
              <img
                className="news__two-img news__three-img"
                src="https://zen.ati.su/images/2023/02/20/sm_86mu5lm7.jpg"
                data-real-src="https://zen.ati.su/images/2023/02/20/sm_86mu5lm7.jpg"
                alt="Долгожданный рост ставок, проблемы c «Платоном» и закрытие дорог в Сибири"
              />

              <h3 className="news__two-title">
                Долгожданный рост ставок, проблемы с«Платоном» изакрытие дорог
                вСибири
              </h3>
            </a>
          </div>
        </div>

        <div className="news__all-box">
          <div className="news__all-item">
            <a
              href="https://news.ati.su/article/2023/02/17/sistemu-spetsstojanok-nazvali-kormushkoj-dlja-regionalnyh-chinovnikov-256378/"
              className="news__two"
            >
              <img
                className="news__two-img"
                src="https://news.ati.su/images/2023/02/17/sm_7m5irdt9.jpg"
                data-real-src="https://news.ati.su/images/2023/02/17/sm_7m5irdt9.jpg"
                alt="Систему спецстоянок назвали кормушкой для региональных чиновников"
              />

              <h3 className="news__two-title">
                Систему спецстоянок назвали кормушкой длярегиональных чиновников
              </h3>
            </a>
            <a
              href="https://zen.ati.su/article/2023/02/07/vesennee-zakrytie-dorog-na-prosushku-2023-552999/"
              className="news__two"
            >
              <img
                className="news__two-img"
                src="https://zen.ati.su/images/2023/02/06/sm_xlu1t1ie.jpg"
                data-real-src="https://zen.ati.su/images/2023/02/06/sm_xlu1t1ie.jpg"
                alt="Весеннее закрытие дорог на просушку — 2023"
              />

              <h3 className="news__two-title">
                Весеннее закрытие дорог напросушку — 2023
              </h3>
            </a>
            <a
              href="https://zen.ati.su/article/2023/02/15/sdelajte-dalnobojschikov-schastlivymi-i-oni-ostanutsja-u-vas-nadolgo-288262/"
              className="news__two"
            >
              <img
                className="news__two-img"
                src="https://zen.ati.su/images/2023/02/16/sm_5se69w5j.jpg"
                data-real-src="https://zen.ati.su/images/2023/02/16/sm_5se69w5j.jpg"
                alt="«Сделайте дальнобойщиков счастливыми, и они останутся у вас надолго»"
              />

              <h3 className="news__two-title">
                «Сделайте дальнобойщиков счастливыми, иони останутся увас
                надолго»
              </h3>
            </a>
            <a
              href="https://zen.ati.su/article/2023/02/15/ot-fishinga-do-ddos-chto-ugrozhaet-uchastnikam-rynka-avtoperevozok-v-seti-144245/"
              className="news__two"
            >
              <img
                className="news__two-img"
                src="https://zen.ati.su/images/2023/02/09/sm_amp2xgmk.jpg"
                data-real-src="https://zen.ati.su/images/2023/02/09/sm_amp2xgmk.jpg"
                alt="От фишинга до DDoS: что угрожает участникам рынка автоперевозок в сети"
              />

              <h3 className="news__two-title">
                От фишинга доDDoS: чтоугрожает участникам рынка автоперевозок
                всети
              </h3>
            </a>
            <a
              href="https://news.ati.su/article/2023/02/14/s-etim-nado-chto-to-delat-belorusskie-dalnobojschiki-ob-ocheredjah-na-granitse-s-rossiej-902451/"
              className="news__two"
            >
              <img
                className="news__two-img"
                src="https://news.ati.su/images/2023/02/14/sm_164h3_mm.jpg"
                data-real-src="https://news.ati.su/images/2023/02/14/sm_164h3_mm.jpg"
                alt="«С этим надо что-то делать»: белорусские дальнобойщики — об очередях на границе с Россией"
              />

              <h3 className="news__two-title">
                «С этим надо что-то делать»: белорусские дальнобойщики —
                обочередях награнице сРоссией
              </h3>
            </a>
            <a
              href="https://zen.ati.su/article/2023/02/13/24-metrovye-parovozy-nulevyh-voditel-pokazal-kakie-avtopoezda-ezdili-po-m-10-20-let-nazad-252011/"
              className="news__two"
            >
              <div className="video-preview">
                <img
                  className="news__two-img"
                  src="https://zen.ati.su/images/2023/02/13/sm__4grnq37.jpg"
                  data-real-src="https://zen.ati.su/images/2023/02/13/sm__4grnq37.jpg"
                  alt="«24-метровые паровозы нулевых»: водитель показал, какие автопоезда ездили по М-10 20 лет назад"
                />
              </div>
              <h3 className="news__two-title">
                «24-метровые паровозы нулевых»: водитель показал, какие
                автопоезда ездили поМ-10 20лет назад
              </h3>
            </a>
          </div>
          <div className="news__all">
            <a href="https://news.ati.su" className="news__all-link">
              Все публикации
            </a>
          </div>
        </div>
      </div>
      <div className="lastNews">
        <div className="lastNews__header">
          <span>
            <img
              className="lastNews__header-icon"
              src="https://files.ati.su/static/mp/assets/img/fire.svg"
              alt="Последние новости"
            />
          </span>
          Последние новости
        </div>

        <div className="lastNews__main">
          <a
            href="https://zen.ati.su/news/2023/02/21/polsha-zakryvaet-dlja-gruzovikov-poslednij-punkt-propuska-na-granitse-s-belarusju-781438/"
            className="lastNews__main-items1"
          >
            <div className="news-block__node">
              <span
                className="news-block__news-time news-time news-block__news-time--pinned"
                data-timestamp="1676959699"
              >
                11:08
              </span>
              Польша закрывает длягрузовиков последний пункт пропуска награнице
              сБеларусью
            </div>
          </a>

          <a
            href="https://zen.ati.su/news/2023/02/20/odin-iz-starejshih-gruzovyh-avtoservisov-sankt-peterburga-pereezzhaet-715606/"
            className="lastNews__main-items1"
          >
            <div className="news-block__node">
              <span
                className="news-block__news-time news-time news-block__news-time--pinned"
                data-timestamp="1676871321"
              >
                20.02
              </span>
              Один изстарейших грузовых автосервисов Санкт-Петербурга переезжает
            </div>
          </a>

          <a
            href="https://zen.ati.su/news/2023/02/20/v-zabajkale-propal-voditel-gruzovika-ego-ischut-spasateli-249135/"
            className="lastNews__main-items1"
          >
            <div className="news-block__node">
              <span
                className="news-block__news-time news-time news-block__news-time--pinned"
                data-timestamp="1676871147"
              >
                20.02
              </span>
              В Забайкалье пропал водитель грузовика — егоищут спасатели
            </div>
          </a>

          <a
            href="https://news.ati.su/news/2023/02/21/v-lenoblasti-vo-vtornik-ogranichat-dvizhenie-na-devjati-trassah-867787/"
            className="lastNews__main-items2"
          >
            <div className="news-block__node">
              <span
                className="news-block__news-time news-time "
                data-timestamp="1676958480"
              >
                10:48
              </span>
              В Ленобласти вовторник ограничат движение надевяти трассах
            </div>
          </a>

          <a
            href="https://news.ati.su/news/2023/02/21/dva-gruzovika-zagorelis-posle-stolknovenija-na-trasse-v-omskoj-oblasti-est-pogibshie-958436/"
            className="lastNews__main-items2"
          >
            <div className="news-block__node">
              <span
                className="news-block__news-time news-time "
                data-timestamp="1676958060"
              >
                10:41
              </span>
              Два грузовика загорелись после столкновения натрассе вОмской
              области, есть погибшие
            </div>
          </a>

          <a
            href="https://news.ati.su/news/2023/02/21/v-habarovskom-krae-dalnobojschiki-ozhidajut-otpravki-paroma-vanino-holmsk-vtoruju-nedelju-153852/"
            className="lastNews__main-items2"
          >
            <div className="news-block__node">
              <span
                className="news-block__news-time news-time "
                data-timestamp="1676957700"
              >
                10:35
              </span>
              В Хабаровском крае дальнобойщики ожидают отправки парома Ванино –
              Холмск вторую неделю
            </div>
          </a>

          <a
            href="https://news.ati.su/news/2023/02/21/v-novosibirskoj-oblasti-na-remont-dorogi-kujbyshev-abramovo-vydeljat-65-mln-rub-705522/"
            className="lastNews__main-items2"
          >
            <div className="news-block__node">
              <span
                className="news-block__news-time news-time "
                data-timestamp="1676957280"
              >
                10:28
              </span>
              В Новосибирской области наремонт дороги "Куйбышев – Абрамово"
              выделят 65млн руб.
            </div>
          </a>

          <a
            href="https://news.ati.su/news/2023/02/21/vlasti-gruzii-ischut-partnera-dlja-stroitelstva-porta-anaklija-323133/"
            className="lastNews__main-items2"
          >
            <div className="news-block__node">
              <span
                className="news-block__news-time news-time "
                data-timestamp="1676956920"
              >
                10:22
              </span>
              Власти Грузии ищут партнера длястроительства порта Анаклия
            </div>
          </a>
        </div>
        <div className="lastNews__main-all-news-box">
          <a href="https://news.ati.su" className="lastNews__main-all-news">
            Все новости
          </a>
        </div>
        <img
          className="rekkkkBottom"
          style={{ width: "300px", height: "550px" }}
          src={!state ? rek1 : rek2}
          alt=""
        />
      </div>
    </div>
  );
};
export default News;
