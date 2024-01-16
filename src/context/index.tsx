'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"

type ContextType ={
loading: boolean,
setLoading: Dispatch<SetStateAction<boolean>>
};

const initaialState={
    loading: false,
    setLoading: ()=>{}
}

export const GlobalContext = createContext<ContextType>(initaialState);

export default function GlobalState ({children}:{children:ReactNode}){
    const [loading, setLoading]= useState(false);

 return (
 <GlobalContext.Provider
 value={{ loading,
    setLoading}}
 >
   {children}
 </GlobalContext.Provider>
 );
}