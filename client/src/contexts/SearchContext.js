import { createContext, useState } from "react";

export const SearchContext = createContext({
    searchField: null,
    setSearchField: () => {},
})

export const SearchProvider = (props) => {
    const [ searchField, setSearchField ] = useState("")

    return(
        <SearchContext.Provider value= {{ searchField, setSearchField}}>
            {props.children}
        </SearchContext.Provider>
    )
}
