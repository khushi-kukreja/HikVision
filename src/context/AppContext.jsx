import React, { createContext } from 'react'
import {cctvProducts} from "../assets/assets"

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const value={
        getCCTVProducts : cctvProducts
    };
  return (
    <>
      <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    </>
  )
}

export default AppContextProvider;
