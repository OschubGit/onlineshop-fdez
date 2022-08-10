import React, { useEffect } from "react";
import { gsap, Power4 } from "gsap";
import { useState } from "react";
import { SwiperSlider } from "../components/SwiperSlider/SwiperSlider";
import { SwiperSlide } from "swiper/react";
import 'swiper/css';
import hoverEffect from 'hover-effect'
import { Link } from "react-router-dom";
import Button from "../components/buttons/Button";


const Home = () => {
  const [toggle, setToggle] = useState(false);
  const timeline = gsap.timeline({
    defaults: { ease: "power4.out", },
  });

  
  useEffect(() => {
    setToggle(false);
    const TituloHome = document.querySelectorAll(".indexIntro");
    const Image1 = document.querySelectorAll(".gsapAnimated");
    const Image2 = document.querySelectorAll(".gsapAnimated_2");
    const Text = document.querySelectorAll(".gsap-text-hover");
    const Text2 = document.querySelectorAll(".gsap-text-hover_2");
    const Text3 = document.querySelectorAll(".gsap-text-hover_3");
    const Text4 = document.querySelectorAll(".gsap-text-hover_4");

    timeline
      .from(TituloHome, 
        { opacity: 0, duration: 1, x: 0, y: 50, stagger:0.1})
      .from(Image2,
          { opacity: 0, duration: 1, x: -50, y: 50, stagger: 0.1})
      .from(Image1,
        { opacity: 0, duration: 1, x: -50, y: -50, stagger: 0.1})
      .from(Text,
        {opacity:0, duration:0.4, x:-10, y: 0,}
      )
      .from(Text2,
        {opacity:0, duration:0.4, x:50, y: 0,}
      )
      .from(Text3,
        {opacity:0, duration:0.4, x:-10, y: 0,}
      )
      .from(Text4,
        {opacity:0, duration:0.4, x:30, y: 0,}
      )


      new hoverEffect({
        parent: document.querySelector('.wrapperEffect'),
        intensity: 0.3,
        image1: '/images/image-man.jpg',
        image2: '/images/man_1.jpeg',
        displacementImage: '/images/ripple.png'
    });

  }, [timeline]);

  return (
    <SwiperSlider direction={"vertical"} spaceBetween={0} slidesPerView={1}>
      <SwiperSlide>
        <div className="wrapper">
          <div className="area indexIntro">
            <span>Nueva Colección verano 2022.</span>
            <div className="rev-block"></div>
            <Link to={"/products"}>
              <Button className="cButton cButton-primary">Ver más</Button>
            </Link>
          </div>
          <div className="gsap-text-hover hover-text-area-partial hover-text-area1"><span className="hover-text-area-span">Todo en lencería</span></div>
          <div className="area1">
            <img
              src="https://static.zara.net/photos///2022/I/0/1/p/7521/646/802/3/w/2840/7521646802_9_1_1.jpg?ts=1659520472862"
              alt="indexImage"
              className="gsapAnimated_2"
            />
          </div>
          <div className="gsap-text-hover_2 hover-text-area-partial hover-text-area2"><span className="hover-text-area-span">Blusas</span></div>
          <div className="area2">
            <img
              src="https://static.zara.net/photos///2022/I/1/1/p/1538/910/131/2/w/908/1538910131_2_1_1.jpg?ts=1659515973813"
              alt="indexImage"
              className="gsapAnimated"
            />
          </div>
          <div className="area3">
            <img
              src="https://static.zara.net/photos///2022/I/0/1/p/3766/022/250/2/w/908/3766022250_2_1_1.jpg?ts=1658928406484"
              alt="indexImage"
              className="gsapAnimated"
            />
          </div>
          <div  className="gsap-text-hover_3 hover-text-area-partial hover-text-area3"><span className="hover-text-area-span">Camisetas</span></div>
          <div className="area4">
            <img
              src="https://static.zara.net/photos///2022/I/2/1/p/4140/202/800/22/w/670/4140202800_15_1_1.jpg?ts=1659607982459"
              alt="indexImage"
              className="gsapAnimated_2"
            />
          </div>
          <div  className="gsap-text-hover_4 hover-text-area-partial hover-text-area4"><span className="hover-text-area-span">Beauty</span></div>
          <div className="line-bg_4 one"></div>
          <div className="line-bg_4 two"></div>
          <div className="line-bg_4 three"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="wrapperEffect">
        <div className="slide2_text">
            <span>Colección hombre</span>
            <Button className="cButton">Ver hombre</Button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="wrapperEffect">
        <div className="footer_info">
          <h4>ÚNETE A NUESTRA NEWSLETTER</h4>
          <div className="social">
          <p>instagram</p>
          <p>tiktok</p>
          <p>twitter</p>
          <p>pinterest</p>
          </div>
          <div className="political">
          <p>política de privacidad</p>
          <p>|</p>
          <p>cookies</p>
          <p>|</p>
          <p>condiciones de compra</p>
          </div>
        </div>
        <div className="line-bg_4 one"></div>
        <div className="line-bg_4 two"></div>
        <div className="line-bg_4 three"></div>
      </SwiperSlide>
    </SwiperSlider>
  );
};

export default Home;
