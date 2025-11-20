// HeroCarousel.jsx
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const slides = [
  {
    src: "/assets/slide1.jpg",
    alt: "First slide",
    caption: "Quality Health Care",
  },
  {
    src: "/assets/slide2.jpg",
    alt: "Second slide",
    caption: "Compassionate Staff",
  },
  {
    src: "/assets/slide3.jpg",
    alt: "Third slide",
    caption: "Community Service",
  },
];

const HeroCarousel = () => {
  return (
    <Carousel fade interval={2000} pause="hover">
      {slides.map((slides, idx) => (
        <Carousel.Item key={idx}>
          <img
            src={slides.src}
            alt={slides.alt}
            className="d-block w-100"
            style={{
              height: "70vh",
              objectFit: "cover",
            }}
          />

          <Carousel.Caption>
            <h3 className="text-black">{slides.caption}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
