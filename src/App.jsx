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
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: (
            <ErrorBoundary fallback="There was an error">
              <Home />
            </ErrorBoundary>
          ),
        },
        {
          path: "/product/:id",
          element: (
            <ErrorBoundary fallback="There was an error">
              <ProductDetails />
            </ErrorBoundary>
          ),
          children: [
            {
              index: true,
              element: (
                <ErrorBoundary fallback="There was an error">
                  <ReviewsContainer />
                </ErrorBoundary>
              ),
            },
            {
              path: "description",
              element: (
                <ErrorBoundary fallback="There was an error">
                  <Description />
                </ErrorBoundary>
              ),
            },
            {
              path: "reviews",
              element: (
                <ErrorBoundary fallback="There was an error">
                  <ReviewsContainer />
                </ErrorBoundary>
              ),
            },
            {
              path: "faq",
              element: (
                <ErrorBoundary fallback="There was an error">
                  <FAQ />
                </ErrorBoundary>
              ),
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
          element: (
            <ErrorBoundary fallback="There was an error">
              <WishList />
            </ErrorBoundary>
          ),
        },
        {
          path: "/contact",
          element: (
            <ErrorBoundary fallback="There was an error">
              {" "}
              <Contact />
            </ErrorBoundary>
          ),
        },
        { path: "/chechoutSuccess", element: <CheckoutSuccess /> },
        { path: "/Order/:id", element: <Order /> },
        // { path: "/Order/:id", element: <Order /> },
        {
          path: "/userprofile",
          element: isLogin ? (
            <ErrorBoundary fallback="There was an error">
              <UserProfile />
            </ErrorBoundary>
          ) : (
            <Navigate to="/" />
          ),
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
              element: (
                <ErrorBoundary fallback="There was an error">
                  <UserAddress />{" "}
                </ErrorBoundary>
              ),
            },

            {
              path: "pastOrders",
              element: (
                <ErrorBoundary fallback="There was an error">
                  <UserOrders />{" "}
                </ErrorBoundary>
              ),
            },
            {
              path: "upcomingOrders",
              element: (
                <ErrorBoundary fallback="There was an error">
                  <UserComingOrders />
                </ErrorBoundary>
              ),
            },
          ],
        },
        {
          path: "/checkout",
          element: (
            <ErrorBoundary fallback="There was an error">
              <CheckOut />
            </ErrorBoundary>
          ),
        },
        { path: "/productReview/:productId", element: <ProductReview /> },
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
          <ErrorBoundary fallback="There was an error">
            <Login />
          </ErrorBoundary>
        </ProtectedRoute>
      ),
    },

    {
      path: "/register",
      element: (
        <ProtectedRoute>
          <ErrorBoundary fallback="There was an error">
            <Register />
          </ErrorBoundary>
        </ProtectedRoute>
      ),
    },
    {
      path: "/emailRecovery",
      element: (
        <ProtectedRoute>
          <ErrorBoundary fallback="There was an error">
            <SendCode />
          </ErrorBoundary>
        </ProtectedRoute>
      ),
    },
    {
      path: "/resetCode",
      element: (
        <ProtectedRoute>
          <ErrorBoundary fallback="There was an error">
            <ResetCode />
          </ErrorBoundary>
        </ProtectedRoute>
      ),
    },
    {
      path: "/resetPassword",
      element: (
        <ProtectedRoute>
          <ErrorBoundary fallback="There was an error">
            <ResetPass />
          </ErrorBoundary>
        </ProtectedRoute>
      ),
    },
    { path: "*/*", element: <NotFound /> },
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
