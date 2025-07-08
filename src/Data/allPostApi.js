export const allPostPromise = (category, search) => {
  let url = "http://localhost:3000/needAllPosts";

  const queries = [];
  if (category && category !== "") {
    queries.push(`category=${category}`);
  }
  if (search) {
    queries.push(`search=${search}`);
  }

 
  if (queries.length > 0) {
    url += `?${queries.join("&")}`;
  }

  return fetch(url).then(res => res.json());
};