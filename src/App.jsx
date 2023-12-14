// ===============< import react router >===============
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
// ===============< Bootstrap >===============
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Provider } from "react-redux";
import { store } from "./store/store";
// ===============< Pages and components >===============
import AppLayout from "./pages/AppLayout/AppLayout";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import WishList from "./pages/WishList/WishList";
import Contact from "./components/Contact/Contact";
import UserProfile from "./components/UserProfile/UserProfile";
import NotFound from "./pages/NotFound/NotFound";
import CheckOut from "./components/CheckOut/CheckOut";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Description from "./components/productDetailsComps/description";
import ReviewsContainer from "./components/productDetailsComps/reviewsContainer";
import FAQ from "./components/productDetailsComps/faqComponent";
import SendCode from "./pages/SendCode/SendCode";
import ResetPass from "./pages/Resetpassword/ResetPass";
import ResetCode from "./pages/ResetCode/ResetCode";
import { AuthProvider } from "./contexts/authContext";
import { useState } from "react";
import UserEdit from "./pages/User/userEdit";
import UserOrders from "./pages/User/userOrders";
import UserAddress from "./pages/User/userAddress";
import Order from "./components/Order/Order";
import UserComingOrders from "./pages/User/userComingOrders";
import ProtectedRoute from "./components/protected/protectedRoute";

import ErrorBoundary from "./components/ErrorHandling/ErrorHandlingPage";

import CheckoutSuccess from "./components/CheckoutSuccess/CheckoutSuccess";
import ProductReviews from "./pages/User/ProductReviews";
import ProductReview from "./components/ProductReview/ProductReview";

// ===============< import components and page >===============
function App() {
  const [isLogin, setLogin] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [enteredCode, setEnteredCode] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ErrorBoundary fallback="There was an error">
          <AppLayout />
        </ErrorBoundary>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/product/:id",
          element: <ProductDetails />,
          children: [
            {
              index: true,
              element: <ReviewsContainer />,
            },
            {
              path: "description",
              element: <Description />,
            },
            {
              path: "reviews",
              element: <ReviewsContainer />,
            },
            {
              path: "faq",
              element: <FAQ />,
            },
          ],
        },
        {
          path: "/cart",
          element: (
            <ErrorBoundary fallback="There was an error">
              <Cart />
            </ErrorBoundary>
          ),
        },
        {
          path: "/wishlist",
          element: <WishList />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        { path: "/chechoutSuccess", element: <CheckoutSuccess /> },
        { path: "/Order/:id", element: <Order /> },
        {
          path: "/userprofile",
          element: isLogin ? <UserProfile /> : <Navigate to="/" />,
          children: [
            {
              index: true,
              element: (
                <ErrorBoundary fallback="There was an error">
                  <UserEdit />
                </ErrorBoundary>
              ),
            },
            {
              path: "address",
              element: <UserAddress />,
            },

            {
              path: "pastOrders",
              element: <UserOrders />,
            },
            {
              path: "upcomingOrders",
              element: <UserComingOrders />,
            },
            {
              path: "orderReviews",
              element: <ProductReviews />,
            },
          ],
        },
        {
          path: "/checkout",

          element: <CheckOut />,
        },
        {
          path: "/productReview/:productId",
          element: <ProductReview />,
        },
      ],
    },
    {
      path: "/shop",
      element: <Shop />,
    },

    {
      path: "/login",
      element: (
        <ProtectedRoute>
          <Login />
        </ProtectedRoute>
      ),
    },

    {
      path: "/register",
      element: (
        <ProtectedRoute>
          <Register />
        </ProtectedRoute>
      ),
    },
    {
      path: "/emailRecovery",
      element: (
        <ProtectedRoute>
          <SendCode />
        </ProtectedRoute>
      ),
    },
    {
      path: "/resetCode",
      element: (
        <ProtectedRoute>
          <ResetCode />
        </ProtectedRoute>
      ),
    },
    {
      path: "/resetPassword",
      element: (
        <ProtectedRoute>
          <ResetPass />
        </ProtectedRoute>
      ),
    },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <Provider store={store}>
      <AuthProvider value={{ isLogin, setLogin, enteredCode, setEnteredCode }}>
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  );
}

export default App;
