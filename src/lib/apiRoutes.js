const AUTH = {
  LOGIN: "/auth/login",
};

const PRODUCT = {
  FEATURED: "/products/featured",
  FETCH: "/products",
  DETAIL: (id) => {
    return `/products/${id}`;
  },
};

const CATEGORY = {
  FETCH: "/categories",
};

const PROFILE = {
  UPDATE: "/profile",
};

const CART = {
  FETCH: "/cart",
  ADD: (productId) => {
    return `/cart/${productId}`;
  },
  REMOVE: (cartItemId) => {
    return `/cart/${cartItemId}`;
  },
  INCREMENT: (cartItemId) => {
    return `/cart/${cartItemId}/increment`;
  },
  DECREMENT: (cartItemId) => {
    return `/cart/${cartItemId}/decrement`;
  },
};

export { AUTH, PRODUCT, CATEGORY, PROFILE, CART };
