import css from "../../assets/style/product.module.css";
import { FaTrash } from "react-icons/fa6";

function WishListProduct({src}) {
    return (
        <div className={`${css["single_product"]} w-100 d-flex flex-wrap`}>
            <div
                className={`${css["cart_product_left"]} float-start d-flex col-md-6 col-12`}
            >
                <div
                    className={`${css["cart_product_image"]} bg-light-subtle d-flex flex-column p-1`}
                    style={{
                        width: "7.75rem",
                        height: "7.75rem",
                    }}
                >
                    <img
                        src={src}
                        alt=""
                        className="h-100 m-auto"
                    />
                </div>
                <div
                    className={`${css["cart_product_details"]} float-start px-2 d-flex flex-column`}
                >
                    <h4>Gradient Graphic T-shirt</h4>
                    <p>
                        Size: <span className="text-secondary">Large</span>
                    </p>
                    <p>
                        Color: <span className="text-secondary">Blue</span>
                    </p>
                    <h3 className="mt-auto mb-0">143$</h3>
                </div>
            </div>
            <div
                className={`${css["wish_product_right"]} d-flex flex-column flex-lg-row align-items-center col-md-6 col-12`}
            >
                <div className="">
                    <button className={`${css.myBtn} rounded-pill px-5 py-3`}>
                        Add To Cart
                    </button>
                </div>
                <div className="">
                    <button className={`${css.myBtn} rounded-pill px-5 py-3`}>
                        <FaTrash className=" text-danger" />
                        <span>Remove</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WishListProduct;
