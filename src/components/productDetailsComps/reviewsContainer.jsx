import ProductReview from "./productReview";
import css from "../../assets/style/product.module.css";
import { FaFilter } from "react-icons/fa6";

function Reviews() {
    return (
        <>
            <div className="tab-headding pb-4 d-flex justify-content-sm-between justify-content-center flex-sm-row flex-column">
                <h2 className="d-inline">
                    Reviews
                    <span id="review-count" className="fs-6 text-secondary">
                        (24)
                    </span>
                </h2>
                <div className="d-flex">
                    <button
                        className={`btn ${css.myBtnDisabled} rounded-circle`}
                    >
                        <FaFilter />
                    </button>
                    <select
                        className={`btn ${css.myBtnDisabled} border-1 rounded-pill mx-3`}
                        aria-label="Default select example"
                    >
                        <option defaultValue>Latest</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <button
                        className={`btn ${css.myBtn} rounded-pill fs-6 px-3`}
                    >
                        Write a Review
                    </button>
                </div>
            </div>
            <div
                className={`${css["reviews-individuals"]} d-flex flex-md-row flex-column flex-wrap justify-content-center`}
            >
                <ProductReview />

            </div>
        </>
    );
}

export default Reviews;
