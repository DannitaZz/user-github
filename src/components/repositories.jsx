import React, {useEffect} from "react";
import axios from 'axios';

const user = {
    token: "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",
    username: "dannitazz"
}

const bodyRepo = {
  "query": `
  query {
    user(login: "${user.username}") {
      repositories(first: 15, orderBy: {field: CREATED_AT, direction: DESC}) {
        nodes {
          createdAt
          name
          description
        }
      }
    }
  }
  `
}

const bodyStar = {
  "query": `
  query {
    user(login: "${user.username}") {
     starredRepositories(first: 15, orderBy: {field:STARRED_AT, direction: DESC}) {
       nodes{
        name
        description
      }
     }
    }
  }
  `
}

const baseUrl = "https://api.github.com/graphql";
const headers = {
  "Content-Type": "application/json",
  "Authorization": "bearer " + user.token
}


async function getRepositories() {
  try {
    const response = await axios({method: "post", url: baseUrl,  data: JSON.stringify(bodyRepo), headers: headers});
    console.log(response.data.data.user);
  } catch (error) {
    console.error(error);
  }
}

async function getStarredRepositories() {
  try {
    const response = await axios({method: "post", url: baseUrl,  data: JSON.stringify(bodyStar), headers: headers});
    console.log(response.data.data.user);
  } catch (error) {
    console.error(error);
  }
}

function Repositories() {

  useEffect(()=> { 
    getRepositories();
    getStarredRepositories();
  }
  , [])
    return (
      <>
        <p>Repositorios GitHub</p>
      </>
    );
}
  
export default Repositories;