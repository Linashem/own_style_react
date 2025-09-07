import React from "react";
import style from "./Answers.module.scss";

export const Answers = () => {
  return (
    <div className={style.answers_block}>
      <div className={style.answers_img}></div>
      <div className={style.answers_text}>
        <h2 className={style.answers_title}>Часто задаваемые вопросы</h2>
        <details name='exclusive' open>
          <summary className={style.question}> Сложно ли шить?</summary>
          {/* <summary> <p>Сложно ли шить?</p></summary> */}

          <article>
            <p>
              Конечно сложно, а вы как думали
              <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas nemo suscipit mollitia quasi laborum quaerat sit unde
              alias magnam blanditiis. Eveniet perferendis deleniti quidem nam
              quaerat necessitatibus consequuntur, provident maxime.
            </p>
          </article>
        </details>

        <details name='exclusive'>
          <summary>Справлюсь ли я, если я новичок?</summary>
          <article>
            <p>нет конечно</p>
          </article>
        </details>

        <details name='exclusive'>
          <summary>А мне нужно покупать швейную машинку?</summary>
          <article>
            <p>
              If you need to support older browsers, you can also create an open
              accordion with JavaScript. You can read about this and all sorts
              of ways to style the <code>details</code> element on{" "}
              <a href='https://www.sitepoint.com/style-html-details-element/'>
                SitePoint
              </a>
              .
            </p>
          </article>
        </details>
        <details name='exclusive'>
          <summary>Or use JavaScript</summary>
          <article>
            <p>
              If you need to support older browsers, you can also create an open
              accordion with JavaScript. You can read about this and all sorts
              of ways to style the <code>details</code> element on{" "}
              <a href='https://www.sitepoint.com/style-html-details-element/'>
                SitePoint
              </a>
              .
            </p>
          </article>
        </details>
      </div>
    </div>
    // </div>
  );
};
