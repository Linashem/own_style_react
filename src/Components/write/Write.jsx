import React from "react";
import style from "./Write.module.scss";
import { BtnWrite } from "../btnWrite/BtnWrite";

export const Write = () => {
  return (
    <div className={style.write_block}>
      <div className={style.write_img}></div>
      <div className={style.write_text}>
        <h2 className={style.write_title}>Остались вопросы?</h2>
        <p className={style.write_desc}>С радостью отвечу!</p>
        <div className={style.write_btn}>
          <BtnWrite />
        </div>
        {/* <a className={style.write_call} href="tel:89101272708">
          <div className={style.write_phone}>
            <img src='/phone.jpg' alt='' />
          </div>
          +7 910 127 27 08
        </a> */}
      </div>
    </div>
  );
};
