import React, { useEffect } from "react";

import { useOutletContext } from "react-router-dom";

function Description() {
  const [prdDescription] = useOutletContext();
  //
  useEffect(() => {}, [prdDescription]);
  return (
    <div id="description">
      <div className="tab-headding pb-4">
        <h2 className="d-inline">Product Description</h2>
      </div>
      <div className="tab-body">
        <p>{prdDescription}</p>
      </div>
    </div>
  );
}

export default Description;
