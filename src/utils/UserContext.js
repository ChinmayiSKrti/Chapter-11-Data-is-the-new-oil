import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Context Dummy Name",
    email: "contextdummyemail@gmail.com",
  },
});

// const UserContext = createContext(null);

export default UserContext;
