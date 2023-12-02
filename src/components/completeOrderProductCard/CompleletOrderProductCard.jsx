import React from "react";

import { useNavigate } from "react-router-dom";
export default function CompleletOrderProductCard({
  title,
  image,
  price,
  description,
  prodId,
}) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: 540 }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <h6>{price}</h6>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-muted">
                  <button
                    className="btn btn-warning"
                    onClick={() => navigate(`/productReview/${prodId}`)}
                  >
                    Review product{" "}
                  </button>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
