import HomeIcon from "@material-ui/icons/HomeOutlined";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import PhoneIcon from "@material-ui/icons/PhoneOutlined";
import KeyIcon from "@material-ui/icons/VpnKeyOutlined";

export const NONAUTH_ROUTES_ARRAY = [
  { path: "/", title: "Home", icon: HomeIcon },
  { path: "/about", title: "About", icon: InfoIcon },
  { path: "/contact", title: "Contact", icon: PhoneIcon },
  { path: "/sign-in", title: "Sign In", icon: KeyIcon },
];

export const ROUTES_OBJECT = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
  "/sign-in": "Sign In",
};
