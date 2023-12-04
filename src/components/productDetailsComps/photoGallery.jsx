import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import instance from "../../axiosConfig/instance";

function photoGallery({ className, product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <Carousel className={`  ${className}`}>
      {product.images &&
        Object.values(product.images).map((image, index) => (
          <Carousel.Item key={index}>
            <img
              src={image}
              className="w-100 h-100"
              alt={`Product Image ${index}`}
            />
          </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default photoGallery;
