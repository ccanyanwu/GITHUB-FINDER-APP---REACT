import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

//create an instance of axios
const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

//Get Search Results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({ q: text });

  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
};

//Get specific user detail and repos
export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "updated_at",
    per_page: 10,
  });
  
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${params}`),
  ]);
  return { user: user.data, repos: repos.data };
};
//fetch users from the github API for testing purposes
/* const fetchUsers = async () => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    dispatch({
      type: "GET_USERS", //the value of the type property must always be in uppercase letters
      payload: data,
    });
  }; */
