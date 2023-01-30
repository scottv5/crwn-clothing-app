import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { Fragment, useEffect, useState } from "react";
import {
  signOutUser,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsDropdownOpen } from "../../store/cart/cart.selector";

const Navigation = () => {
  const isDropdownOpen = useSelector(selectIsDropdownOpen);
  const currentUser = useSelector(selectCurrentUser);
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    const getDisplayName = async () => {
      try {
        const res = await createUserDocumentFromAuth(currentUser);
        if (!res || !res.displayName) return;
        return setDisplayName(res.displayName);
      } catch (e) {
        console.log("Error at navigation component:", e);
      }
    };
    getDisplayName();
  }, [currentUser]);

  const signOutHandler = async () => {
    try {
      await signOutUser();
    } catch (e) {
      console.log("an error has occured while attepting to logout: ", e);
    }
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          {currentUser ? <span>{displayName}</span> : null}
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <NavLink to="/shop">SHOP</NavLink>
          <CartIcon />
        </NavLinksContainer>
        {isDropdownOpen ? <CartDropdown /> : null}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

//styles
const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;
const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;
const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
