import { createContext, useState } from "react";

export const TacheContext = createContext();        //creer le context

export const TacheProvider = ({ children }) => {      //creer le provider
    const [onTache, setOnTache] = useState(false);
    const [listTache, setListTache] = useState([]);
    const [isDataLoading, setDataLoading] = useState(false);

    return (
        <TacheContext.Provider value={{ onTache, setOnTache, listTache, setListTache, isDataLoading, setDataLoading }}>
            {children}
        </TacheContext.Provider>
    )
};
