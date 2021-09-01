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