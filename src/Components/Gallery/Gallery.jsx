import React from "react";
import style from "./Gallery.module.scss";
import { GalleryList } from "../galleryList/GalleryList";

export const Gallery = () => {
  return (
    <div className={style.gallery_block}>
      <h1 className={style.title}>Gallery</h1>
      <GalleryList />
    </div>
  );
};
