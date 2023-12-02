import { useEffect, useState } from "react";
import RatingStars from "./RatingStars";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import instance from "../../axiosConfig/instance";
import { useNavigate } from "react-router-dom";
export default function ProductReview() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [review, setReview] = useState({
    productId: productId,
    name: "",
    reviewTitle: "",
    comment: "",
    rating: null,
  });

  // ===============< get order Product >===============

  const getReviewedProduct = async () => {
    try {
      const { token } = localStorage;
      const res = await instance.get(`/product/${productId}`);
      res && setProduct(res.data.data);
    } catch (error) {
      console.error("Error fetching completed order products:", error.message);
    }
  };
  // ===============< get order Product >===============

  const createProductReview = async (review) => {
    try {
      const { token } = localStorage;
      const res = await instance.post(`/reviews/product/${productId}`, review, {
        headers: { authorization: token },
      });
      if (res.status === 201) {
        toast.success(`review create successfully `);
        navigate("/");
      } else {
        console.log("error in creating the review ");
      }
    } catch (error) {
      console.error("Error fetching completed order products:", error.message);
    }
  };

  useEffect(() => {
    getReviewedProduct();
  }, []);

  // ===============< handleRating >===============

  const handleRating = (rating) => {
    console.log("rating", rating);
    setReview({ ...review, rating: rating });
  };

  // ===============< handleRating >==============

  const handleInputChange = (name, value) => {
    setReview({ ...review, [name]: value });
    console.log(" this is the review", review);
  };
  // ===============< handleRating >==============
  const handleFormSubmit = (e) => {
    console.log("this is me ");
    e.preventDefault();
    createProductReview(review);
  };

  return (
    <div className="container ">
      <div className="row  my-5">
        <div className="col-4">
          {product.images && product.images[0] && (
            <img src={product.images[0]} className="w-100 " alt="Product" />
          )}
        </div>
        <div className="col-8">
          <h1>
            Rating :{" "}
            <RatingStars
              className="d-inline"
              handleRating={handleRating}
            ></RatingStars>
          </h1>
          <p>{product.description}</p>
        </div>
        <div className="col-8">
          <form onSubmit={(e) => handleFormSubmit(e)}>
            <div>
              <div className="form-group mt-3">
                <label htmlFor="name" className="mb-1">
                  Name :
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  aria-describedby="name"
                  placeholder="please enter your name"
                  onChange={(e) => {
                    handleInputChange(e.target.name, e.target.value);
                  }}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="reviewTitle" className="mb-1">
                  Review Title
                </label>
                <input
                  required
                  type="text"
                  name="reviewTitle"
                  className="form-control"
                  id="reviewTitle"
                  placeholder="Review Title"
                  onChange={(e) => {
                    handleInputChange(e.target.name, e.target.value);
                  }}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="comment" className="mb-1">
                  Detailed Review
                </label>
                <textarea
                  required
                  name="comment"
                  className="form-control w-100"
                  id="comment"
                  placeholder=" Please provide a Detailed review about product "
                  onChange={(e) => {
                    handleInputChange(e.target.name, e.target.value);
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-warning w-100 "
                style={{ marginTop: 20 }}
              >
                Send Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
