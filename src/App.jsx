// import react router
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// redux
import { Provider } from "react-redux";
import { store } from "./store/store";
import AppLayout from "./pages/AppLayout/AppLayout";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import WishList from "./pages/WishList/WishList";
import Order from "./components/Order/Order";
import Contact from "./components/Contact/Contact";
import UserProfile from "./components/UserProfile/UserProfile";
import NotFound from "./pages/notFound/NotFound";
import CheckOut from "./components/CheckOut/CheckOut";
import Login from "./pages/Login/Login";
import Description from "./components/productDetailsComps/description";
import ReviewsContainer from "./components/productDetailsComps/reviewsContainer";
import FAQ from "./components/productDetailsComps/faqComponent";
import SendCode from "./pages/SendCode/SendCode";
import ResetPass from "./pages/Resetpassword/ResetPass";
import ResetCode from "./pages/ResetCode/ResetCode";
import { AuthProvider } from "./contexts/authContext";
import { useState } from "react";
// import LoginTwo from "./pages/Login/LoginTwo";

// import components and page

function App() {
  const [isLogin, setLogin] = useState(
    localStorage.getItem("token") ? true : false
  );
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { index: true, element: <Home /> },

        {
          path: "/product",
          element: <ProductDetails />,
          children: [
            { index: true, element: <ReviewsContainer /> },
            {
              path: "/product/description",
              element: <Description />,
            },
            {
              path: "/product/reviews",
              element: <ReviewsContainer />,
            },
            { path: "/product/faq", element: <FAQ /> },
          ],
        },
        { path: "/cart", element: <Cart /> },
        { path: "/wishlist", element: <WishList /> },
        { path: "/contact", element: <Contact /> },
        // protected route user should be loged in
        { path: "/Order", element: <Order /> },
        { path: "/userprofile", element: <UserProfile /> },
        { path: "/checkout", element: <CheckOut /> },
      ],
    },
    { path: "/shop/:productName?", element: <Shop /> },
    { path: "/login", element: <Login /> },
    // { path: "/register", element: <Register /> },
    { path: "/emailRecovery", element: <SendCode /> },
    { path: "/resetCode", element: <ResetCode /> },
    { path: "/resetPassword", element: <ResetPass /> },
    { path: "*/*", element: <NotFound /> },
  ]);

  return (
    // <Provider store={store}>

    <AuthProvider value={{ isLogin, setLogin }}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AuthProvider>

    // </Provider>
  );
}

export default App;
