/**
 * Fetch popular repositories by language
 * @param {string} language
 */
const fetchPopularRepos = async language => {
  const endpoint = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );

  const res = await fetch(endpoint);
  const data = await res.json();
  if (!data.items) {
    throw new Error(data.message);
  }
  return data.items;
};

/**
 * Checks if a user exists
 * @param {string} username Github username
 */
const checkUserExists = async username => {
  const endpoint = window.encodeURI(
    `https://api.github.com/search/users?q=user:${username}`
  );

  const res = await fetch(endpoint);
  return res.ok;
};

export { fetchPopularRepos, checkUserExists };
