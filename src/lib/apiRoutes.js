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

export { AUTH, PRODUCT, CATEGORY };
