import React from "react";
import style from "./Gallery.module.scss";
import { GalleryList } from "../galleryList/GalleryList";

export const Gallery = () => {
  return (
    <div className={style.gallery_block}>
      <h2 className={style.title}>Работы учениц</h2>
      <GalleryList />
    </div>
  );
};
