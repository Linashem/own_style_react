import React from "react";
import { Link } from "react-router-dom";
import style from "./BtnWrite.module.scss";

export const BtnWrite = () => {
  return (
    <div>
      <a href='mailto:liiinashem@gmil.com' className={style.btn}>
        <svg>
          <rect x='0' y='0' fill='none' width='100%' height='100%' />
        </svg>
        Hover
      </a>
    </div>
  );
};
