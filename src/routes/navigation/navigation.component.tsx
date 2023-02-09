import styled from "styled-components";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsDropdownOpen } from "../../store/cart/cart.selector";

const Navigation = () => {
  const isDropdownOpen = useSelector(selectIsDropdownOpen);
  const currentUser = useSelector(selectCurrentUser);

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
          {currentUser ? <span>{currentUser.displayName}</span> : null}
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
