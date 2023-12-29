import css from "../../assets/style/product.module.css";
import Loader from "../../components/Loader/loader";
import CartTitle from "../../components/cartTitle/CartTitle";
import WishListProduct from "../../components/wishComponents/WishListProduct";
import { useSelector } from "react-redux";

function WishList() {
  const isLoading = useSelector((state) => state.wishList.loading);
  const wishList = useSelector((state) => state.wishList.list);
  const token = localStorage.getItem("token");

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        // {/* <!-- ======================== page body ==================================== --> */}
        <div className="d-flex row justify-content-center col-12 m-0">
          <CartTitle title="Wish List" />
          <div
            className={`${css.product} row d-flex col-md-10 justify-content-md-between justify-content-center m-0 p-0`}
          >
            {/* <!-- Wish-Products PART --> */}
            {wishList && wishList.length > 0 ? (
              <>
                <div
                  className={`${css.wish} col-12 border rounded-4 p-4 d-flex flex-column bg-white`}
                >
                  {wishList &&
                    wishList.length > 0 &&
                    wishList.map((prod, index) => {
                      return (
                        <>
                          <WishListProduct
                            key={index}
                            product={prod}
                            token={token}
                          />
                          {index < wishList.length - 1 && (
                            <hr className="my-4 w-100" />
                          )}
                        </>
                      );
                    })}
                </div>
                <div
                  className={`${css.discount} d-flex col-12 mt-5 justify-content-center`}
                >
                  <button className="border-0 rounded-pill col-md-3 col-8 mt-4 fs-5 bg-danger text-white">
                    Clear Wish List
                  </button>
                </div>
              </>
            ) : (
              <h3 className="text-center fw-semibold">
                Your Wish list is empty!
              </h3>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default WishList;
