import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useParams } from "react-router-dom";
import instance from "../../axiosConfig/instance";

function photoGallery(props) {

    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState({});
    const { id } = useParams();

     useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await instance.get(`product/${id}`);
           setProduct(response.data.data);
          
         } catch (error) {
           console.error("Error fetching product", error);
         }
       };
       fetchData();
     }, [id]);
  // const [images, setImages] = useState([
  //   "src/assets/images/wish-list/1.jpeg",
  //   "src/assets/images/wish-list/2.jpeg",
  //   "src/assets/images/wish-list/3.jpeg",
  //   "src/assets/images/wish-list/5.jpeg",
  // ]);

  return (
    <Carousel
      className={` ${props.className}`}
      style={{ height: "", backgroundColor: "" }}
    >
      {product.images &&
        Object.values(product.images).map((image, index) => (
          <Carousel.Item key={index}>
            <img
              src={image}
              width={"100%"}
              className="rounded-4"
              alt={`Product Image ${index}`}
            />
          </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default photoGallery;
