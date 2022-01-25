import { valueToPercent } from "@mui/material"

export const initialState = {
    username : '',
    token: '',
    repos: [],
    favs: [],
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'signIn': 
            const user = action.value;
            const username = user.email;
            const token = user.password;
            return {...state, username: username, token: token}
        case 'setRepositories':
            const repos = action.value;
            return {...state, repos: repos}
        case 'favs': 
            const id = action.value;
            console.log('En reducer', id)
            let currentFavs = JSON.parse(JSON.stringify(state.favs));
            if (currentFavs.includes(id)) {
                currentFavs.pop(id);
            } else {
                currentFavs.push(id);
            }
            console.log(currentFavs)
            return {...state, favs: currentFavs}

    
    }
}