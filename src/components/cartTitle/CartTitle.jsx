import styles from "./cart.module.css";
function CartTitle({ title }) {
  return (
    <>
      <div className={`${styles.title}`}>
        <div
          className={`${styles.overLay}  d-flex justify-content-center align-items-center `}
        >
          <h1 className="col-12 fw-bolder m-5 text-center ">{title}</h1>
        </div>
      </div>
    </>
  );
}

export default CartTitle;
