import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [listUser, setListUser] = useState([]);
    return(
        <UserContext.Provider value={{listUser, setListUser}}>
            {children}
        </UserContext.Provider>
    );
}

