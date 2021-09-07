const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const CART = "/cart";
const CATEGORY = "/category";
const DATAIL = "/products/:id";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  cart: CART,
  category: CATEGORY,
  detail: (id)=>{
    if(id){
      return `/products/${id}`;
    } else {
      return DATAIL;
    }
  }
  // detail: DATAIL
}

export default routes;