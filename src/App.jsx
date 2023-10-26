// import react router
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// redux
// import { Provider } from "react-redux";
// import { store } from "./store/store";
import AppLayout from "./pages/AppLayout/AppLayout";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";
import WishList from "./components/WishList/WishList";
import Order from "./components/Order/Order";
import Contact from "./components/Contact/Contact";
import UserProfile from "./components/UserProfile/UserProfile";
import NotFound from "./pages/notFound/NotFound";

// import components and page

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/Shop", element: <Shop /> },
        { path: "/register", element: <ProductDetails /> },
        { path: "/cart", element: <Cart /> },
        { path: "/wishlist", element: <WishList /> },
        { path: "/contact", element: <Contact /> },
        // protected route user should be loged in
        { path: "/Order", element: <Order /> },
        { path: "/userprofile", element: <UserProfile /> },
      ],
    },
    { path: "/*", element: <NotFound /> },
  ]);

  return (
    // <Provider store={store}>
    <RouterProvider router={router} />
    // </Provider>
  );
}

export default App;
