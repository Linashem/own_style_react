import React, { useState } from "react";
import style from "./AboutUs.module.scss";
import { useInView } from "react-intersection-observer";

export const AboutUs = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [isShow, setIsShow] = useState(false);
  const showHandler = () => {
    setIsShow((prev) => !prev);
  };
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
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 2s",
          }}
        >
          <p className={!isShow && style.visible_text}>
            В школе шитья «Свой Стиль» вы научитесь шить, кроить изделия по
            индивидуальным меркам, а также найдете свой ПЕРСОНАЛЬНЫЙ СТИЛЬ. Для
            своих учениц я бесплатно предоставляю услуги стилиста. Для меня
            важно, чтобы каждое изделие, которое вы будете отшивать подходило
            вам идеально. Научу вас подчеркивать достоинства и нивелировать
            особенности вашей фигуры.
          </p>
          <br />
          <button
            className={
              !isShow ? style.btn_show_more : style.btn_show_more_not_visible
            }
            onClick={showHandler}
          >
            Показать еще
          </button>

          <div className={!isShow && style.active}>
            <p>
              Немного расскажу, как у нас будет проходить процесс обучения: пока
              вы учитесь на первом блоке (изучаете стежки, строчки, различные
              узлы) я определяю (по желанию, конечно же) ваш стилевой типаж,
              линейность лица, карту длин изделий. Далее, я выдаю ряд
              рекомендаций по подбору фасонов, тканей, фактур, и даже причесок.
            </p>
            <br />

            <p>
              И, когда мы, непосредственно переходим ко второму блоку обучения -
              конструированию и пошиву изделий, вы уже сможете выбрать в
              магазине подходящую ткань, определиться с фасоном и длиной
              изделия.
            </p>
            <br />
            <p>
              Королевы мои, в нашей школе мы создаем осознанный, функциональный,
              по всем параметрам подходящий, именно для вас, ГАРДЕРОБ МЕЧТЫ, а
              не шьем одежду ради одежды!
            </p>
            <br />
            <p> У нас очень уютная и теплая атмосфера, жду каждую из вас!</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};
