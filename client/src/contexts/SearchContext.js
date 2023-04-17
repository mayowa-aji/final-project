import { createContext, useState } from "react";

export const SearchContext = createContext({
    searchField: null,
    setSearchField: () => {},
    searchResults: null,
    setSearchResults: () => {},
})

export const SearchProvider = (props) => {
    const [ searchField, setSearchField ] = useState("")
    const [ searchResults, setSearchResults] = useState([])

    return(
        <SearchContext.Provider value= {{ searchField, setSearchField, searchResults, setSearchResults}}>
            {props.children}
        </SearchContext.Provider>
    )
}
