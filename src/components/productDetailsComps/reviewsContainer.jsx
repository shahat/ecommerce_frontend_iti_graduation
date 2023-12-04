import ProductReview from "./productReview";
import css from "../../assets/style/product.module.css";
import { FaFilter } from "react-icons/fa6";
import instance from "../../axiosConfig/instance";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ReviewsContainer() {
  const { id } = useParams();
  const [reviews, setReviews] = useState({});

  const getreviews = async () => {
    try {
      const res = await instance.get(`/reviews/${id}`);
      setReviews([...res.data.allReviews]);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  useEffect(() => {
    getreviews();
  }, []);

  reviews && console.log("these are the all reviews", reviews);

  return (
    <>
      <div className="tab-headding pb-4 d-flex justify-content-sm-between justify-content-center flex-sm-row flex-column my-5">
        <h2 className="d-inline">
          Reviews
          <span id="review-count" className="fs-6 text-secondary p-3">
            ( 24 )
          </span>
        </h2>
        <div className="d-flex">
          <select
            className={`btn ${css.myBtnDisabled} border-1 rounded-pill mx-3 `}
            aria-label="Default select example"
          >
            <option defaultValue>
              <FaFilter /> Latest
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div
        className={`${css["reviews-individuals"]} d-flex flex-md-row flex-column flex-wrap justify-content-center`}
      >
        {reviews ? (
          reviews.length > 0 ? (
            reviews.map((item, index) => (
              <ProductReview
                key={index}
                comment={item.comment}
                name={item.name}
                rating={item.rating}
                createdAt={item.createdAt}
              />
            ))
          ) : (
            <h1> There is no review for this product yet</h1>
          )
        ) : (
          <h1> Loading reviews </h1>
        )}
      </div>
    </>
  );
}

export default ReviewsContainer;
