import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const Signed = createContext();

export const SignedProvider = ({ children }) => {
    const [isSigned, setIsSigned] = useState(false);
    return (
        <Signed.Provider value={{ isSigned, setIsSigned }}>{ children }</Signed.Provider>
    )
}

export const useSignedContext = () => useContext(Signed);