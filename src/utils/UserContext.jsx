import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "",
});

export default UserContext;