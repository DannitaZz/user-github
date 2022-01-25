import React from "react";
import Repos from "./repos";

function Favorites({state, dispatch}) {
    console.log('favs', state)
    return (
        <Repos repos={state.favRepos} favs={state.favs} dispatch={dispatch}/>
    )
}

export default Favorites
