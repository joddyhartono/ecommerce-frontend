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
  REMOVE: (productId) => {
    return `/cart/${productId}`;
  },
};

export { AUTH, PRODUCT, CATEGORY, PROFILE, CART };
