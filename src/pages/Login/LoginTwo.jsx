import axios from "axios";
import React, { useEffect, useState } from "react";

function LoginTwo() {
  
   

  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("helllo")
    axios
      .post("http://localhost:4000/users/signin", {
        email: "mohammdsd@gmail.com",
        password: "IlovePalestine99@@",
      })
      .then(function (response) {
        setData(response.data);
        console.log(response.data)
      })
      .catch((error) => console.log(error));
  }, []);

//   const listItems = data.map((item) => <li>{item.address.city}</li>);

  return (
    <div>
      <div>React & Axios api</div>
      {/* <ul>{listItems}</ul> */}
{/* 
      <button onClick={}>

      </button> */}
    </div>
  );
}

export default LoginTwo;
