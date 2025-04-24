import React from "react";
import { useState } from "react";

import style from "./Header.module.scss";
import { Link } from "react-router-dom";
import { routes } from "../../helper/routes";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const isActiveHandler = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <header className={style.header}>
      <nav className={style.header_nav}>
        <div className={style.header_line}>
          <Link to={routes.home} className={style.logo}>
            <img src='./logo.svg' alt='свой стиль' width={40} height={70} />
            <div className={style.logo_text}>
              <p className={style.logo_title}>СВОЙ СТИЛЬ</p>
              <p className={style.logo_desc}>ШКОЛА ШИТЬЯ</p>
            </div>
          </Link>

          <button className={style.header_burger} onClick={isActiveHandler}>
            <span className={style.burger_item}></span>
            <span className={style.burger_item}></span>
            <span className={style.burger_item}></span>
          </button>

          <ul className={isActive ? style.active : style.notactive}>
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
      </nav>
    </header>
  );
};
