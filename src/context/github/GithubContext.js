import { createContext, useReducer } from 'react';
import githubReduder from './GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReduder, initialState);

  const searchUsers = async (text) => {
    clearUsers();
    setLoading(true);
    const params = new URLSearchParams({
      q: text,
    });
    fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    }).then((result) => {
      result.json().then((data) => {
        const { items } = data;
        dispatch({ type: 'GET_USERS', payload: items });
      });
    });
  };

  const getUser = async (text) => {
    setLoading(true);
    fetch(`${GITHUB_URL}/users/${text}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    }).then((result) => {
      if (result.status === 404) {
        window.location = '/notfound';
      } else {
        result.json().then((data) => {
          dispatch({ type: 'GET_USER', payload: data });
        });
      }
    });
  };

  const getUserRepos = async (login) => {
    clearUsers();
    setLoading(true);
    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10,
    });
    fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    }).then((result) => {
      result.json().then((data) => {
        dispatch({ type: 'GET_REPOS', payload: data });
      });
    });
  };

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

  return (
    <GithubContext.Provider
      value={{
        ...state,
        searchUsers,
        setLoading,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
