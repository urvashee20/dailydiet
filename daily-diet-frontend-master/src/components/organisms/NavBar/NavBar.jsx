import React, { useState } from "react";
import {
  Container,
  NavLogo,
  Logo,
  NavLinks,
  NavAuth,
  NavHamburgerMenu,
  NavLinksHamburger,
  NavOverlay,
  CloseIcon,
} from "./NavBarStyles";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../../assets/Images/website_logo.png";
import LinkItem from "../../molecules/LinkItem/LinkItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { AiFillHome } from "react-icons/ai";
import { BsInfoLg } from "react-icons/bs";
import { FaUser, FaLightbulb } from "react-icons/fa";
import { RiLogoutBoxFill, RiMapPinUserFill } from "react-icons/ri";
import { IoMdCreate } from "react-icons/io";
import {
  currentCategoryRemoved,
  currentItemRemoved,
  itemCreateModeRemoved,
  mealsRemoved,
  productsRemoved,
} from "../../../store/helpers";

const NavBar = ({ handleLogout }) => {
  const { currentUser } = useSelector((state) => state.user.authData);
  const [isMenuOpened, setMenuOpened] = useState(false);
  const dispatch = useDispatch();

  return (
    <Container>
      <NavLogo>
        <Logo src={logo} alt={"website logo"} />
        <LinkItem
          to="/"
          margin={"0.5rem"}
          size={"1.2rem"}
          weight={"bold"}
          children={"Daily Diet"}
        />
      </NavLogo>
      <NavLinks>
        <LinkItem
          to="/"
          children={
            <>
              <AiFillHome size={"0.9rem"} /> Home
            </>
          }
        />
        {currentUser && (
          <LinkItem
            to="/diaries"
            children={
              <>
                <FaLightbulb size={"0.9rem"} /> Inspirations
              </>
            }
          />
        )}
        {currentUser && (
          <LinkItem
            to="/builder"
            children={
              <>
                <IoMdCreate size={"1rem"} /> Creator
              </>
            }
            color={"rgb(125, 215, 120)"}
          />
        )}
        <LinkItem
          to="/about"
          children={
            <>
              <BsInfoLg size={"0.9rem"} /> About
            </>
          }
        />
      </NavLinks>
      <NavAuth>
        {currentUser && (
          <LinkItem
            to="/profile"
            onClick={() => {
              dispatch(currentItemRemoved());
              dispatch(currentCategoryRemoved());
              dispatch(productsRemoved());
              dispatch(mealsRemoved());
              dispatch(itemCreateModeRemoved());
            }}
            children={
              <>
                <RiMapPinUserFill size={"1rem"} /> Profile
              </>
            }
          />
        )}
        {!currentUser ? (
          <LinkItem
            add={1}
            color={"white"}
            padding={"0.6rem"}
            radius={"10px"}
            to="/auth"
            children={
              <>
                <FaUser size={"0.7rem"} /> Sign In / Register
              </>
            }
            size={"0.8rem"}
          />
        ) : (
          <LinkItem
            remove={1}
            color={"white"}
            padding={"0.6rem"}
            radius={"10px"}
            to="/auth"
            onClick={() => handleLogout()}
            children={
              <>
                <RiLogoutBoxFill size={"0.7rem"} /> Logout
              </>
            }
            size={"0.8rem"}
          />
        )}
      </NavAuth>
      <NavHamburgerMenu mobile>
        <GiHamburgerMenu onClick={() => setMenuOpened(true)} size={"1.5rem"} />
        <NavOverlay isOpened={isMenuOpened}>
          <CloseIcon>
            <GrClose onClick={() => setMenuOpened(false)} size={"1.5rem"} />
          </CloseIcon>
          <NavLinksHamburger>
            <LinkItem
              to="/"
              onClick={() => setMenuOpened(false)}
              children={
                <>
                  <AiFillHome size={"0.9rem"} /> Home
                </>
              }
              margin={"1.6rem"}
              size={"1.2rem"}
            />
            {currentUser && (
              <LinkItem
                to="/diaries"
                onClick={() => setMenuOpened(false)}
                children={
                  <>
                    <FaLightbulb size={"0.9rem"} /> Inspirations
                  </>
                }
                margin={"1.6rem"}
                size={"1.2rem"}
              />
            )}
            {currentUser && (
              <LinkItem
                to="/builder"
                children={
                  <>
                    <IoMdCreate size={"1rem"} /> Creator
                  </>
                }
                onClick={() => setMenuOpened(false)}
                color={"rgb(125, 215, 120)"}
                margin={"1.6rem"}
                size={"1.2rem"}
              />
            )}
            <LinkItem
              to="/about"
              onClick={() => setMenuOpened(false)}
              children={
                <>
                  <BsInfoLg size={"0.9rem"} /> About
                </>
              }
              margin={"1.6rem"}
              size={"1.2rem"}
            />
            {currentUser && (
              <LinkItem
                to="/profile"
                onClick={() => setMenuOpened(false)}
                children={
                  <>
                    <RiMapPinUserFill size={"1rem"} /> Profile
                  </>
                }
                margin={"2.5rem 1.6rem 0 1.6rem"}
                size={"1.2rem"}
              />
            )}
            {!currentUser ? (
              <LinkItem
                add={1}
                color={"white"}
                padding={"0.6rem"}
                radius={"10px"}
                to="/auth"
                onClick={() => setMenuOpened(false)}
                children={
                  <>
                    <FaUser size={"0.7rem"} /> Sign In / Register
                  </>
                }
                margin={"1.6rem"}
                size={"1rem"}
              />
            ) : (
              <LinkItem
                remove={1}
                color={"white"}
                padding={"0.6rem"}
                radius={"10px"}
                to="/"
                onClick={() => {
                  setMenuOpened(false);
                  handleLogout();
                }}
                children={
                  <>
                    <RiLogoutBoxFill size={"0.7rem"} /> Logout
                  </>
                }
                margin={"1.6rem"}
                size={"1rem"}
              />
            )}
          </NavLinksHamburger>
        </NavOverlay>
      </NavHamburgerMenu>
    </Container>
  );
};

export default NavBar;
