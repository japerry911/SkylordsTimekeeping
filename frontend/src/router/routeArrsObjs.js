import HomeIcon from "@material-ui/icons/HomeOutlined";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import PhoneIcon from "@material-ui/icons/PhoneOutlined";
import KeyIcon from "@material-ui/icons/VpnKeyOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import WelcomeIcon from "@material-ui/icons/EmojiPeople";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import PublishIcon from "@material-ui/icons/Publish";

export const NONAUTH_ROUTES_ARRAY = [
  { path: "/", title: "Home", icon: HomeIcon },
  { path: "/about", title: "About", icon: InfoIcon },
  { path: "/contact", title: "Contact", icon: PhoneIcon },
  { path: "/sign-in", title: "Sign In", icon: KeyIcon },
  { path: "/register-user", title: "Create Account", icon: AccountCircleIcon },
];

export const AUTH_ROUTES_ARRAY = [
  { path: "/welcome/", title: "Welcome", icon: WelcomeIcon },
  { path: "/clocking/", title: "Clocking", icon: AccessAlarmIcon },
  { path: "/history/", title: "History", icon: LibraryBooksIcon },
  { path: "/upload/", title: "Upload", icon: PublishIcon },
];

export const ROUTES_OBJECT = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
  "/sign-in": "Sign In",
  "/register-user": "Create Account",
  "/welcome": "Welcome",
  "/clocking": "Clocking",
  "/history": "History",
  "/upload": "Upload",
};

export const FOOTER_NONAUTH_POSTION_OBJECT = {
  "/": 0,
  "/about": 1,
  "/contact": 2,
  "/sign-in": 3,
  "/register-user": 4,
};

export const FOOTER_AUTH_POSTION_OBJECT = {
  "/welcome": 0,
  "/clocking": 1,
  "/history": 2,
  "/upload": 3,
};
