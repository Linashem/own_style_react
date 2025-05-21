import React from "react";
import style from "./Answers.module.scss";

export const Answers = () => {
  return (
    <div className={style.answers_block}>
      {/* <div className={style.answers}> */}
      <div className={style.answers_img}></div>
      <div className={style.answers_text}>
        <h2 className={style.answers_title}>Часто задаваемые вопросы</h2>
        <details name='exclusive' open>
          <summary>Сложно ли шить?</summary>
          <article>
            <p>
              Конечно сложно As of 2024, it’s possible (in some browsers) to
              coordinate multiple <code>details</code> elements in such a way
              that one closes when another one opens.
            </p>
          </article>
        </details>

        <details name='exclusive'>
          <summary>Справлюсь ли я если я новичок?</summary>
          <article>
            <p>
              For extra effect, we can also style the currently open{" "}
              <code>details</code> element(s) differently from the closed ones.
            </p>
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
