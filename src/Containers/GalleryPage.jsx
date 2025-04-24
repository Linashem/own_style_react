import React, { Component, useEffect } from "react";
import { render } from "react-dom";
import "./style.css";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import fjGallery from "flickr-justified-gallery";

export const GalleryPage = () => {
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
        <a
          data-lg-size='1600-2400'
          data-pinterest-text='Pin it2'
          data-tweet-text='lightGallery slide  2'
          className='gallery__item'
          data-src='./work1.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>"
        >
          <img className='img-responsive' src='./work1.jpg' />
        </a>
        <a
          data-lg-size='1600-2400'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work2.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@thesaboo' >Sascha Bosshard </a></h4><p> Location - <a href='https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz'>Pizol, Mels, Schweiz</a></p>"
        >
          <img
            className='img-responsive'
            src='./work2.jpg'
          />
        </a>
        <a
          data-lg-size='1600-2398'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work3.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@yusufevli' >Yusuf Evli </a></h4><p> Foggy Road</p>"
        >
          <img
            className='img-responsive'
            src='./work3.jpg'
          />
        </a>
        <a
          data-lg-size='1600-1067'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work4.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Jay Mantri</a></h4><p>  Misty shroud over a forest</p>"
        >
          <img
            className='img-responsive'
            src='./work4.jpg'
          />
        </a>
        <a
          data-lg-size='1600-1067'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work5.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Florian van Duyn</a></h4><p>Location - <a href='Bled, Slovenia'>Bled, Slovenia</a> </p>"
        >
          <img
            className='img-responsive'
            src='./work5.jpg'
          />
        </a>
        <a
          data-lg-size='1600-1126'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work6.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@juanster' >Juan Davila</a></h4><p>Location - <a href='Bled, Slovenia'>Bled, Slovenia</a> Wooded lake island </p>"
        >
          <img
            className='img-responsive'
            src='./work6.jpg'
          />
        </a>
        <a
          data-lg-size='1600-1063'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work7.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@davidmarcu' >David Marcu</a></h4><p>Location - <a href='https://unsplash.com/s/photos/ciuca%C8%99-peak%2C-romania'>Ciucaș Peak, Romania</a> Alone in the unspoilt wilderness </p>"
        >
          <img
            className='img-responsive'
            src='./work7.jpg'
          />
        </a>
        <a
          data-lg-size='1600-2400'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work8.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@whoisbenjamin' >whoisbenjamin</a></h4>
          // <p>Location - <a href='https://unsplash.com/s/photos/ciuca%C8%99-peak%2C-romania'>Snowdonia National Park, Blaenau Ffestiniog, UK</a> 
          // A swan on a calm misty lake in the mountains of Snowdonia, North Wales. <a href='https://unsplash.com/photos/9V6EkAoTWJM'>Link</a> </p>"
        >
          <img
            className='img-responsive'
            src='./work8.jpg'
          />
        </a>
        <a
          data-lg-size='1600-1144'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work9.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@aaronburden' >Aaron Burden</a></h4><p>Location - <a href='https://unsplash.com/s/photos/grayling%2C-michigan%2C-united-states'>Grayling, Michigan, United States</a> Colorful trees near a lake. <a href='https://unsplash.com/photos/00QWN1J0g48'>Link</a> </p>"
        >
          <img
            className='img-responsive'
            src='./work9.jpg'
          />
        </a>
        <a
          data-lg-size='1600-2400'
          data-pinterest-text='Pin it2'
          data-tweet-text='lightGallery slide  2'
          className='gallery__item'
          data-src='./work1.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>"
        >
          <img className='img-responsive' src='./work1.jpg' />
        </a>
        <a
          data-lg-size='1600-2400'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work2.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@thesaboo' >Sascha Bosshard </a></h4><p> Location - <a href='https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz'>Pizol, Mels, Schweiz</a></p>"
        >
          <img
            className='img-responsive'
            src='./work2.jpg'
          />
        </a>
        <a
          data-lg-size='1600-2398'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work3.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@yusufevli' >Yusuf Evli </a></h4><p> Foggy Road</p>"
        >
          <img
            className='img-responsive'
            src='./work3.jpg'
          />
        </a>
        <a
          data-lg-size='1600-1067'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work4.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Jay Mantri</a></h4><p>  Misty shroud over a forest</p>"
        >
          <img
            className='img-responsive'
            src='./work4.jpg'
          />
        </a>
        <a
          data-lg-size='1600-1067'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work5.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Florian van Duyn</a></h4><p>Location - <a href='Bled, Slovenia'>Bled, Slovenia</a> </p>"
        >
          <img
            className='img-responsive'
            src='./work5.jpg'
          />
        </a>
        <a
          data-lg-size='1600-1126'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work6.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@juanster' >Juan Davila</a></h4><p>Location - <a href='Bled, Slovenia'>Bled, Slovenia</a> Wooded lake island </p>"
        >
          <img
            className='img-responsive'
            src='./work6.jpg'
          />
        </a>
        <a
          data-lg-size='1600-1063'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work7.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@davidmarcu' >David Marcu</a></h4><p>Location - <a href='https://unsplash.com/s/photos/ciuca%C8%99-peak%2C-romania'>Ciucaș Peak, Romania</a> Alone in the unspoilt wilderness </p>"
        >
          <img
            className='img-responsive'
            src='./work7.jpg'
          />
        </a>
        <a
          data-lg-size='1600-2400'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work8.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@whoisbenjamin' >whoisbenjamin</a></h4>
          // <p>Location - <a href='https://unsplash.com/s/photos/ciuca%C8%99-peak%2C-romania'>Snowdonia National Park, Blaenau Ffestiniog, UK</a> 
          // A swan on a calm misty lake in the mountains of Snowdonia, North Wales. <a href='https://unsplash.com/photos/9V6EkAoTWJM'>Link</a> </p>"
        >
          <img
            className='img-responsive'
            src='./work8.jpg'
          />
        </a>
        <a
          data-lg-size='1600-1144'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work9.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@aaronburden' >Aaron Burden</a></h4><p>Location - <a href='https://unsplash.com/s/photos/grayling%2C-michigan%2C-united-states'>Grayling, Michigan, United States</a> Colorful trees near a lake. <a href='https://unsplash.com/photos/00QWN1J0g48'>Link</a> </p>"
        >
          <img
            className='img-responsive'
            src='./work9.jpg'
          />
        </a>
        <a
          data-lg-size='1600-2400'
          data-pinterest-text='Pin it2'
          data-tweet-text='lightGallery slide  2'
          className='gallery__item'
          data-src='./work1.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>"
        >
          <img className='img-responsive' src='./work1.jpg' />
        </a>
        <a
          data-lg-size='1600-2400'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work2.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@thesaboo' >Sascha Bosshard </a></h4><p> Location - <a href='https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz'>Pizol, Mels, Schweiz</a></p>"
        >
          <img
            className='img-responsive'
            src='./work2.jpg'
          />
        </a>
        <a
          data-lg-size='1600-2398'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work3.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@yusufevli' >Yusuf Evli </a></h4><p> Foggy Road</p>"
        >
          <img
            className='img-responsive'
            src='./work3.jpg'
          />
        </a>
        <a
          data-lg-size='1600-1067'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work4.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Jay Mantri</a></h4><p>  Misty shroud over a forest</p>"
        >
          <img
            className='img-responsive'
            src='./work4.jpg'
          />
        </a>
        <a
          data-lg-size='1600-1067'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work5.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Florian van Duyn</a></h4><p>Location - <a href='Bled, Slovenia'>Bled, Slovenia</a> </p>"
        >
          <img
            className='img-responsive'
            src='./work5.jpg'
          />
        </a>
        <a
          data-lg-size='1600-1126'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work6.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@juanster' >Juan Davila</a></h4><p>Location - <a href='Bled, Slovenia'>Bled, Slovenia</a> Wooded lake island </p>"
        >
          <img
            className='img-responsive'
            src='./work6.jpg'
          />
        </a>
        <a
          data-lg-size='1600-1063'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work7.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@davidmarcu' >David Marcu</a></h4><p>Location - <a href='https://unsplash.com/s/photos/ciuca%C8%99-peak%2C-romania'>Ciucaș Peak, Romania</a> Alone in the unspoilt wilderness </p>"
        >
          <img
            className='img-responsive'
            src='./work7.jpg'
          />
        </a>
        <a
          data-lg-size='1600-2400'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work8.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@whoisbenjamin' >whoisbenjamin</a></h4>
          // <p>Location - <a href='https://unsplash.com/s/photos/ciuca%C8%99-peak%2C-romania'>Snowdonia National Park, Blaenau Ffestiniog, UK</a> 
          // A swan on a calm misty lake in the mountains of Snowdonia, North Wales. <a href='https://unsplash.com/photos/9V6EkAoTWJM'>Link</a> </p>"
        >
          <img
            className='img-responsive'
            src='./work8.jpg'
          />
        </a>
        <a
          data-lg-size='1600-1144'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work9.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@aaronburden' >Aaron Burden</a></h4><p>Location - <a href='https://unsplash.com/s/photos/grayling%2C-michigan%2C-united-states'>Grayling, Michigan, United States</a> Colorful trees near a lake. <a href='https://unsplash.com/photos/00QWN1J0g48'>Link</a> </p>"
        >
          <img
            className='img-responsive'
            src='./work9.jpg'
          />
        </a>
        <a
          data-lg-size='1600-2400'
          data-pinterest-text='Pin it2'
          data-tweet-text='lightGallery slide  2'
          className='gallery__item'
          data-src='./work1.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>"
        >
          <img className='img-responsive' src='./work1.jpg' />
        </a>
        <a
          data-lg-size='1600-2400'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work2.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@thesaboo' >Sascha Bosshard </a></h4><p> Location - <a href='https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz'>Pizol, Mels, Schweiz</a></p>"
        >
          <img
            className='img-responsive'
            src='./work2.jpg'
          />
        </a>
        <a
          data-lg-size='1600-2398'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work3.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@yusufevli' >Yusuf Evli </a></h4><p> Foggy Road</p>"
        >
          <img
            className='img-responsive'
            src='./work3.jpg'
          />
        </a>
        <a
          data-lg-size='1600-1067'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work4.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Jay Mantri</a></h4><p>  Misty shroud over a forest</p>"
        >
          <img
            className='img-responsive'
            src='./work4.jpg'
          />
        </a>
        <a
          data-lg-size='1600-1067'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work5.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Florian van Duyn</a></h4><p>Location - <a href='Bled, Slovenia'>Bled, Slovenia</a> </p>"
        >
          <img
            className='img-responsive'
            src='./work5.jpg'
          />
        </a>
        <a
          data-lg-size='1600-1126'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work6.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@juanster' >Juan Davila</a></h4><p>Location - <a href='Bled, Slovenia'>Bled, Slovenia</a> Wooded lake island </p>"
        >
          <img
            className='img-responsive'
            src='./work6.jpg'
          />
        </a>
        <a
          data-lg-size='1600-1063'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work7.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@davidmarcu' >David Marcu</a></h4><p>Location - <a href='https://unsplash.com/s/photos/ciuca%C8%99-peak%2C-romania'>Ciucaș Peak, Romania</a> Alone in the unspoilt wilderness </p>"
        >
          <img
            className='img-responsive'
            src='./work7.jpg'
          />
        </a>
        <a
          data-lg-size='1600-2400'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work8.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@whoisbenjamin' >whoisbenjamin</a></h4>
          // <p>Location - <a href='https://unsplash.com/s/photos/ciuca%C8%99-peak%2C-romania'>Snowdonia National Park, Blaenau Ffestiniog, UK</a> 
          // A swan on a calm misty lake in the mountains of Snowdonia, North Wales. <a href='https://unsplash.com/photos/9V6EkAoTWJM'>Link</a> </p>"
        >
          <img
            className='img-responsive'
            src='./work8.jpg'
          />
        </a>
        <a
          data-lg-size='1600-1144'
          data-pinterest-text='Pin it3'
          data-tweet-text='lightGallery slide  4'
          className='gallery__item'
          data-src='./work9.jpg'
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@aaronburden' >Aaron Burden</a></h4><p>Location - <a href='https://unsplash.com/s/photos/grayling%2C-michigan%2C-united-states'>Grayling, Michigan, United States</a> Colorful trees near a lake. <a href='https://unsplash.com/photos/00QWN1J0g48'>Link</a> </p>"
        >
          <img
            className='img-responsive'
            src='./work9.jpg'
          />
        </a>
       
      </LightGallery>
    </div>
  );
};
