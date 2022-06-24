import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "./store/ui-slice";
import { Fragment } from "react";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
  useEffect(() => {
    // const sendCartData = async () => {
    //   dispatch(
    //     uiActions.showNotifiation({
    //       status: "pending",
    //       title: "Sending...",
    //       message: "Sending cart data!",
    //     })
    //   );
    //   const response = await fetch(
    //     "https://react-getting-started-a562b-default-rtdb.firebaseio.com/cart.json",
    //     { method: "PUT", body: JSON.stringify(cart) }
    //   );
    //   if (!response.ok) {
    //     throw new Error("Sending cart data failed");
    //   }
    //   dispatch(
    //     uiActions.showNotifiation({
    //       status: "success",
    //       title: "Success!",
    //       message: "Sent cart data successfully!",
    //     })
    //   );
    // };
    // if (isInitial) {
    //   isInitial = false;
    //   return;
    // }
    // sendCartData().catch((error) => {
    //   dispatch(
    //     uiActions.showNotifiation({
    //       status: "error",
    //       title: "Error!",
    //       message: "Sent cart data failed!",
    //     })
    //   );
    // });
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
