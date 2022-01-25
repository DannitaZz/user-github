import React, {useEffect} from "react";
import axios from 'axios';
import Repos from "./repos";


/* const user = {
    token: "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",
    username: "dannitazz"
} */



function Repositories({state, dispatch}) {
  
  const bodyRepo = {
    "query": `
    query {
      user(login: "${state.username}") {
        repositories(first: 15, orderBy: {field: CREATED_AT, direction: DESC}) {
          nodes {
            createdAt
            name
            description
            id
          }
        }
      }
    }
    `
  }
  
  const baseUrl = "https://api.github.com/graphql";
  const headers = {
    "Content-Type": "application/json",
    "Authorization": "bearer " + state.token
  }
  
 

  useEffect(()=> { 
    async function getRepositories() {
      try {
        const response = await axios({method: "post", url: baseUrl,  data: JSON.stringify(bodyRepo), headers: headers});
        const data = response.data.data.user.repositories.nodes;
        dispatch({type: 'setRepositories', value: data})
      } catch (error) {
        console.error(error);
      }
    }
    getRepositories();

  }
  , [])
    return (
      <>
        <p>Repositorios GitHub</p>
        <Repos repos={state.repos} dispatch={dispatch}/>
      </>
    );
}
  
export default Repositories;