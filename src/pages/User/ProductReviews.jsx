import { useEffect, useState } from "react";
import instance from "../../axiosConfig/instance";
import CompleletOrderProductCard from "../../components/completeOrderProductCard/CompleletOrderProductCard";

export default function ProductReviews() {
  const [completeOrderProducts, setCompleteOrderProducts] = useState([]);

  const getCompleteOrderProducts = async () => {
    try {
      const { token } = localStorage;
      const res = await instance.get("/orders/completedOrderProducts", {
        headers: { authorization: token },
      });
      setCompleteOrderProducts([res.data]);
    } catch (error) {
      console.error("Error fetching completed order products:", error.message);
    }
  };

  useEffect(() => {
    getCompleteOrderProducts();
  }, []);

  return (
    <div>
      {completeOrderProducts && completeOrderProducts.length > 0 ? (
        completeOrderProducts[0].map((item, index) => (
          <CompleletOrderProductCard
            key={index}
            title={item.title}
            image={item.images[0]}
            price={item.price}
            description={item.description}
            prodId={item.productId}
          />
        ))
      ) : (
        <h1> no completed orders yet </h1>
      )}
    </div>
  );
}
