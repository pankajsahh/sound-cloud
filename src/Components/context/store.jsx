import { useState } from "react";
import context from "./Context";

const Store = (prop)=>{
    const [searchKey,serSearchKey]=useState("")
    return(
        <context.Provider value={{
            searchKey,
            serSearchKey
        }} >
            {prop.children}
        </context.Provider>
    )

}
export default Store;