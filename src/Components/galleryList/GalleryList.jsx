import React, { Component, useEffect } from "react";
import "./style.css";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import fjGallery from "flickr-justified-gallery";
import { GalleryItem } from "../galleryItem/GalleryItem";
import { gallery } from "../../helper/constants";

export const GalleryList = () => {
  useEffect(() => {
    fjGallery(document.querySelectorAll(".gallery"), {
      itemSelector: ".gallery__item",
      rowHeight: 180,
      lastRow: "start",
      gutter: 2,
      rowHeightTolerance: 0.1,
      calculateItemsHeight: false,
    });
  }, []);

  return (
    <div>
      <LightGallery
        plugins={[lgZoom, lgVideo]}
        mode='lg-fade'
        pager={false}
        thumbnail={true}
        galleryId={"nature"}
        autoplayFirstVideo={false}
        elementClassNames={"gallery"}
        mobileSettings={{
          controls: false,
          showCloseIcon: false,
          download: false,
          rotate: false,
        }}
      >
        {gallery.map((el) => (
          <GalleryItem
            data_lg_size={el.data_lg_size}
            className={el.className}
            data_src={el.data_src}
          />
        ))}
      </LightGallery>
    </div>
  );
};
