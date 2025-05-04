import React from "react";
import style from "./Card.module.scss";
import { Link } from "react-router-dom";

export const Card = ({ text, imgSrc, price, lastCardStyle }) => {


  const cardStyle =
    lastCardStyle > 0
      ? {
          background: `linear-gradient(
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.8) 40%,
      rgba(0, 0, 0, 1) 100%
    )`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }
      : { backgroundImage: `url(${imgSrc})` };

  const lastTextStyle = lastCardStyle > 0 ? { position: "static" } : {};

  return (
    <Link to='/courses/:id' className={style.card_link}>
      <div className={style.card} style={cardStyle}>
        {/* <div className={style.card} {lastCardStyle ? style={{color:'red'}} : style={{ backgroundImage: `url(${imgSrc})` }}} > */}

        {/* <button className={style.card_button}>Подробнее</button> */}
        <div className={style.text} style={lastTextStyle}>
          <h4 className={style.card_title}>
            <a className={style.link}>{text}</a>
          </h4>
          <p>{price}</p>
        </div>
      </div>
    </Link>
  );
};
