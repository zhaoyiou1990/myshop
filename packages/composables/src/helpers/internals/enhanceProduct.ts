// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const enhanceProduct = (productResponse: Array<any>) => {
  const enhancedProductResponse = productResponse.map((product) => ({
    ...product,
    name: product.name,
    coverImage: product.cover.url,
    regularPrice: product.regular_proce_amount,
    discountPrice: product.price_amount
  }));
  return enhancedProductResponse;
};

export default enhanceProduct;
