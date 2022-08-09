// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getFeaturedProduct(context) {
  // Create URL object containing full endpoint URL
  const url = new URL('/rest/featuredproducts', context.config.api.url);

  // Use axios to send a GET request
  const { data } = await context.client.get(url.href);
  // Return data from the API
  return data;
}
