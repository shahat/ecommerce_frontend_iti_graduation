/* eslint-disable react/prop-types */
import style from "./shop.module.css";
function Categoy(props) {
  return (
    <>
      <div className=" mt-4 m-auto d-flex flex-column justify-content-center align-items-center">
        <img
          className={`category-image rounded-circle border border-5 ${style.categoryimage}`}
          src={props.src}
          alt="Mopile"
        />
        <div className="mt-2 fs-4 fw-bold">{props.name}</div>
      </div>
    </>
  );
}

export default Categoy;
