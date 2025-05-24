import React from "react";
import style from "./AboutUs.module.scss";
import { useInView } from "react-intersection-observer";

export const AboutUs = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <div id='about' className={style.about_block}>
      <div className={style.about_img}></div>
      <div
        ref={ref}
        style={{
          opacity: inView ? 1 : 0,
          transition: "opacity 1s",
        }}
        className={style.about_text}
      >
        <h2 className={style.title}>Здравствуйте</h2>
        <p
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 1.5s",
          }}
          className={style.desc}
        >
          меня зовут Алла
        </p>
        <p
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 2s",
          }}
        >
          Здесь будет написан любой текст приветствия Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Iusto ullam, consequatur incidunt
          laudantium maiores assumenda, exercitationem debitis libero, eos
          voluptatum alias temporibus laborum quod vero omnis. A iste dolorum
          quae eos, natus, consectetur reprehenderit magni, distinctio soluta
          obcaecati laborum rem.
        </p>
      </div>
    </div>
  );
};
