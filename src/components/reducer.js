import { valueToPercent } from "@mui/material"

export const initialState = {
    username : '',
    token: '',
    repos: [],
    favs: [],
    favRepos: []
}

function arrayRemove(arr, value) { 
    
    return arr.filter(function(e){ 
        return e !== value; 
    });
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
            console.log('antes', state.favs)
            let currentFavs = JSON.parse(JSON.stringify(state.favs));
            const currentRepos = JSON.parse(JSON.stringify(state.repos));

            if (currentFavs.includes(id)) {
                currentFavs = arrayRemove(currentFavs, id);
            } else {
                currentFavs.push(id);
            }
            let newRepos = [];
            currentRepos.forEach(element => {
                if (currentFavs.includes(element.id)) {
                    newRepos.push(element);
                }
            });
            console.log('Reducer', newRepos);
            return {...state, favs: currentFavs, favRepos: newRepos}
    }
}