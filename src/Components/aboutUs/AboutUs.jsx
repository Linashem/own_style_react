import React from 'react'
import style from "./AboutUs.module.scss";

export const AboutUs = () => {
  return (
    <div id='about' className={style.about_block}>
      <div className={style.about_img}></div>
      <div className={style.about_text}>
        <h2 className={style.title}>Здравствуйте</h2>
        <p className={style.desc}>меня зовут Алла</p>
        <p>
          Здесь будет написан любой текст приветствия 
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ullam,
          consequatur incidunt laudantium maiores assumenda, exercitationem
          debitis libero, eos voluptatum alias temporibus laborum quod vero
          omnis. A iste dolorum quae eos, natus, consectetur reprehenderit
          magni, distinctio soluta obcaecati laborum rem.
        </p>
      </div>
    </div>
  )
}
