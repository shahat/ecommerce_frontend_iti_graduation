import { useState } from "react";
import css from "../../assets/style/product.module.css";
import RelatedProducts from "../../components/relatedProducts/relatedProducts";
import WishListProduct from "../../components/wishComponents/WishListProduct";

function WishList() {
    const [products, setProducts] = useState([
        "src/assets/images/wish-list/shirt.png",
        "src/assets/images/wish-list/t-shirt.jpeg",
        "src/assets/images/wish-list/tra.jpeg",
    ]);

    return (
        <>
            {/* <!-- ============================page body ======================================== --> */}
            <div className="d-flex row justify-content-center col-12 m-0">
                <h1 className="col-12 fw-bolder m-5 text-center">
                    My Wish List
                </h1>
                {/* <!-- Wish PART --> */}
                <div
                    className={`${css.product} row d-flex col-md-10 justify-content-md-between justify-content-center m-0 p-0`}
                >
                    {/* <!-- Wish-Products PART --> */}
                    <div
                        className={`${css.wish} col-12 border rounded-4 p-4 d-flex flex-column bg-white`}
                    >
                        {products.map((prod, index) => {
                            return (
                                <>
                                    <WishListProduct key={index} src={prod} />
                                    {index < products.length - 1 && (
                                        <hr className="my-4 w-100" />
                                    )}
                                </>
                            );
                        })}
                    </div>
                    {/* <!-- ========================================================================= --> */}
                    <div
                        className={`${css.discount} d-flex col-12 mt-5 justify-content-center`}
                    >
                        <button className="border-0 rounded-pill col-md-3 col-8 mt-4 fs-5 bg-danger text-white">
                            Clear Wish List
                        </button>
                    </div>
                </div>

                {/* <!-- Related Products PART --> */}
                <RelatedProducts />
            </div>
        </>
    );
}

export default WishList;
