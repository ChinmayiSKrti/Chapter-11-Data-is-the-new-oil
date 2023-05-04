import { useContext } from "react";
import UserContext from "../utils/userContext";

const Footer = (value) => {
  const { user } = useContext(UserContext);
  console.log('user in footer component -',user);
  console.log('value - ',value);

  return <h4>This site is developed by {user.name} - {user.email}</h4>;
};

export default Footer;
