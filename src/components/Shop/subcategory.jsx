/* eslint-disable react/prop-types */
import style from "./shop.module.css";
function SubCategoy(props) {
  return (
    <>
      <div className=" mt-4 m-auto d-flex flex-column justify-content-center align-items-center">
        <img
          className={`category-image rounded-circle border border-5 ${style.subcategoryimage}`}
          src={props.src}
          alt="Mopile"
        />
        <div className="mt-2 fs-6 fw-bold">{props.name}</div>
      </div>
    </>
  );
}

export default SubCategoy;
