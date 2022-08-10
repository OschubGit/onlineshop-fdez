import { Swiper } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay, FreeMode, Mousewheel } from "swiper";

export const SwiperSlider = ({children, spaceBetween, slidesPerView, direction, autoplay, onSlideChangeProp, onSwiperProp}) => {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      direction={direction}
      pagination={{
        clickable: true,
      }}
      autoplay={autoplay}
      modules={[Pagination, Autoplay, FreeMode, Mousewheel]}
      onSlideChange={onSlideChangeProp}
      onSwiper={onSwiperProp}
      mousewheel={true}
      freeMode={{
        enabled: true,
      }}
    >
      {children}
    </Swiper>
  );
};