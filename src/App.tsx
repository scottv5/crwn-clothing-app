import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Auth from "./routes/auth/auth.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.reducer";
import { UserStateObject } from "./store/user/user.types";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      let res, displayName;
      let userStateObjectOrNull: UserStateObject | null = null;

      if (user) res = await createUserDocumentFromAuth(user);
      if (res && res.displayName) {
        displayName = user?.displayName || res.displayName;
      }
      if (
        user &&
        res &&
        user.accessToken &&
        displayName &&
        user.email &&
        res.createdAt.seconds
      ) {
        userStateObjectOrNull = {
          accessToken: user.accessToken,
          displayName,
          email: user.email,
          createdAt: res.createdAt.seconds,
        };
      }
      dispatch(setCurrentUser(userStateObjectOrNull));
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
