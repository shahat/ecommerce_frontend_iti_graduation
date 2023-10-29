import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function photoGallery(props) {
  const [images, setImages] = useState([
    "src/assets/images/wish-list/1.jpeg",
    "src/assets/images/wish-list/2.jpeg",
    "src/assets/images/wish-list/3.jpeg",
    "src/assets/images/wish-list/5.jpeg",
  ]);

  return (
    <Carousel
      className={`${props.className}`}
      style={{ height: "", backgroundColor: "" }}
    >
      {images.map((pic, index) => {
        return (
          <Carousel.Item key={index}>
            <img src={pic} width={"100%"} className="rounded-4" />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default photoGallery;
