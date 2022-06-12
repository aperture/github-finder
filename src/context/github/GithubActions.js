import axios from 'axios';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const githubAPI = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const result = await githubAPI.get(`/search/users?${params}`);
  return result.data.items;
};

export const getUserAndRepos = async (username) => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  });
  const [user, repos] = await Promise.all([
    githubAPI.get(`/users/${username}`),
    githubAPI.get(`/users/${username}/repos?${params}`),
  ]);
  return { user: user.data, repos: repos.data };
};
