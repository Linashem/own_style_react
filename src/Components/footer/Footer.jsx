import React from "react";
import style from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { routes } from "../../helper/routes";

export const Footer = () => {
  return (
    <footer className={style.footer_block}>
      <div className={style.footer_row}>
        <div className={style.footer_column}>
          <Link to={routes.home} className={style.logo}>
            <img src='/logo.svg' alt='свой стиль' width={40} height={70} />
            <div className={style.logo_text}>
              <p className={style.logo_title}>СВОЙ СТИЛЬ</p>
              <p className={style.logo_desc}>ШКОЛА ШИТЬЯ</p>
            </div>
          </Link>
          <p className={style.footer_desc}>
            В школе шитья «Свой Стиль» вы научитесь шить, кроить изделия по
            индивидуальным меркам, а также найдете свой персональный стиль.
          </p>
        </div>

        <div className={style.footer_column}>
          <ul className={style.footer_links}>
            <li className={style.header_item}>
              <Link to={routes.home}>О нас</Link>
            </li>
            <li className={style.header_item}>
              <Link to={routes.courses}>Курсы</Link>
            </li>
            <li className={style.header_item}>
              <Link to={routes.gallery}> Работы учениц</Link>
            </li>
          </ul>
        </div>
        <div className={style.footer_column}>
          <a className={style.footer_connection} href='tel:89101272708'>
            <div className={style.connection_icon}>
              <img src='/phone.svg' alt='' />
            </div>
            +7 910 127 27 08
          </a>
          <a
            className={style.footer_connection}
            href='mailto:liiinashem@gmail.com'
          >
            <div className={style.connection_icon}>
              <img src='/email.svg' alt='' />
            </div>
            Написать
          </a>
        </div>
        <div className={style.footer_map}>
          <iframe
            src='https://yandex.ru/map-widget/v1/?um=constructor%3A0325273e898f6e231c6438935d98054667e158f8508f1d1a78cbc188d94c0e49&amp;source=constructor'
            width='500'
            height='280'
            frameborder='0'
          ></iframe>
        </div>
      </div>
    </footer>
  );
};
