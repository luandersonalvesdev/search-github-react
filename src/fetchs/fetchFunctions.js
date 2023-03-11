export const fFetchUser = async (userToSearch) => {
  const URL_PROFILE = `https://api.github.com/users/${userToSearch}`
  const response = await fetch(URL_PROFILE);
  const data = await response.json();
  return data;
};

export const fFetchRepos = async (userToSearch) => {
  const URL_REPOS = `https://api.github.com/users/${userToSearch}/repos`;
  const response = await fetch(URL_REPOS);
  const data = await response.json();
  return data;
}
