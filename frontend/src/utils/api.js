const api_url = "http://localhost:3009";

export const getUser = async () => {
  return await fetch(api_url + '/user', {
    credentials: "include"
  });

}

export const getProducts = async () => {
  return await fetch(api_url + '/products',);
}

export const addToCart = async (name) => {
  return await fetch(api_url + '/addtocart/'+name,{
    credentials: "include",
    method: 'POST'
  });
}

export const searchProduct = async (name) => {
  return await fetch(api_url + '/search/productquery'+name,{
    credentials: "include",
    method: 'POST'
  });
}

export const LikeorUnlike = async () => {
  return await fetch(api_url + '/likeorunlike',{
    credentials: "include",
    method: 'POST'
  });
}
export const getLikedProducts = async () => {
  return await fetch(api_url + '/likedproducts',{
    credentials: "include",
    method: 'GET'
  });
}
export const removeFromCart = async (name) => {
  return await fetch(api_url + '/removefromcart/'+name,{
    credentials: "include",
    method: 'POST'
  });
}

export const getUserCart = async () => {
  return await fetch(api_url + '/getusercart',{
    credentials: "include",
    method: 'POST'
  });
}

export const checkout = async () => {
  return await fetch(api_url + '/cart/checkout',{
    credentials: "include",
    method: 'POST'
  });
}

export const submitQuiz = async (answers) => {
  return await fetch(api_url + '/quiz',{
    credentials: "include",
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(answers)
  });
}