import { createContext, useState } from "react";

export const ThemaProv = createContext();

export const ThemaContext = ({children}) => {
    const [thema, setThema] = useState(true);

    return <ThemaProv.Provider value={{thema, setThema}}>
        {children}
    </ThemaProv.Provider>
};
