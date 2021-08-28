const api_url = "http://localhost:3009";

export const getUser = async () => {
  return await fetch(api_url + '/user', {
    credentials: "include"
  });

}