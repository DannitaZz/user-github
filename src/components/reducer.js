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
            console.log('En reducer: ', user);
            return {...state, username: username, token: token}
        case 'setRepositories':
            const repos = action.value;
            return {...state, repos: repos}
    
    }
}