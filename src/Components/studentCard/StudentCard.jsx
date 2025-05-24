import React from 'react'
import style from "./StudentCard.module.scss";


export const StudentCard = ({imgSrc}) => {
  return (
    <div className={style.stydent_card_block}>
        <img src={imgSrc} alt="работа ученицы" />
    </div>
  )
}
