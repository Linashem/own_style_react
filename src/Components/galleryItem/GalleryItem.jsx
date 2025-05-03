import React from "react";

export const GalleryItem = ({data_lg_size, className, data_src}) => {
  window.addEventListener('beforeunload', () => {
    console.log('User clicked back button');
  });
  return (
    <a  data-lg-size={data_lg_size} className={className} data-src={data_src} >
      <img className='img-responsive' src={data_src} />
    </a>
  );
};
