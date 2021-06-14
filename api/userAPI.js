export const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

export const getUser = async ({ queryKey }) => {
  const [_key, { id }] = queryKey;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.json();
};
