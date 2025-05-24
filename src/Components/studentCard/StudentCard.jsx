import React from "react";
import style from "./StudentCard.module.scss";
import { Link } from "react-router-dom";
import { routes } from "../../helper/routes";

export const StudentCard = ({ imgSrc, text }) => {
  const cardStyle = { backgroundImage: `url(${imgSrc})` };

  return (
    <>
      {text ? (
        <Link to={routes.gallery}>
          <div style={cardStyle} className={style.stydent_card_block}>
            <p className={style.p}> {text && text}</p>
          </div>
        </Link>
      ) : (
        <div style={cardStyle} className={style.stydent_card_block}></div>
      )}
    </>
  );
};
