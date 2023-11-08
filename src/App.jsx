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
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";
import WishList from "./components/WishList/WishList";
import Order from "./components/Order/Order";
import Contact from "./components/Contact/Contact";
import UserProfile from "./components/UserProfile/UserProfile";
import NotFound from "./pages/notFound/NotFound";
import CheckOut from "./components/CheckOut/CheckOut";
import UserEdit from "./pages/User/userEdit";
import UserOrders from "./pages/User/userOrders";
import UserWishlist from "./pages/User/userWishlist";
import UserAddress from "./pages/User/userAddress";
import UserPayment from "./pages/User/userPayment";
import UserComingOrders from "./pages/User/userComingOrders";

// import components and page

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/login", element: <Shop /> },
        { path: "/register", element: <ProductDetails /> },
        { path: "/cart", element: <Cart /> },
        { path: "/wishlist", element: <WishList /> },
        { path: "/contact", element: <Contact /> },
        // protected route user should be loged in
        { path: "/Order/:id", element: <Order /> },
        { path: "/userprofile", element: <UserProfile />,
        children:[
          {index : true  ,element : <UserEdit/>},
          {path:"address", element:<UserAddress/>},
          {path:"payment",element:<UserPayment/>},
          {path:"pastOrders" , element : <UserOrders/>},
          {path:"upcomingOrders" , element : <UserComingOrders/>}
        ]
       },
        { path: "/checkout", element: <CheckOut /> },

      ],
    },
    { path: "/*", element: <NotFound /> },
  ]);

  return (
    <Provider store={store}>
    
    <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
