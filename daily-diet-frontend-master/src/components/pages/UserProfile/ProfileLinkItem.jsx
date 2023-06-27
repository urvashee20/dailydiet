import {
  NavLinkItem,
  NavigationLink,
  NavigationHashLink,
} from "./ProfileLinkItemStyles";

const ProfileLinkItem = (props) => {
  return (
    <NavLinkItem>
      {props.hash ? (
        <NavigationHashLink smooth {...props}>
          {props.children}
        </NavigationHashLink>
      ) : (
        <NavigationLink {...props}>{props.children}</NavigationLink>
      )}
    </NavLinkItem>
  );
};
export default ProfileLinkItem;
