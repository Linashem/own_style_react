import React from "react";
import style from "./Card.module.scss";
import { useDispatch } from "react-redux";
import { oneCourseActions } from "../../store/oneCourseReducer";
import { Link } from "react-router-dom";
import { routes } from "../../helper/routes";

export const Card = ({ text, imgSrc, price, lastCardStyle, id }) => {
  const dispatch = useDispatch();

  const goToGood = (item) => {
    dispatch(oneCourseActions(item));
  };

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
  const lastLink = lastCardStyle > 0 ? routes.courses : `/courses/${id - 1}`;

  return (
    <Link
      to={lastLink}
      onClick={() => goToGood(id)}
      className={style.card_link}
    >
      <div className={style.card} style={cardStyle}>
        {/* <button className={style.card_button}>Подробнее</button> */}
        <div className={style.text} style={lastTextStyle}>
          <h4 className={style.card_title}>
            <p className={style.link}>{text}</p>
          </h4>
          <p>{price}</p>
        </div>
      </div>
    </Link>
  );
};
