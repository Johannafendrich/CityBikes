export async function getCities() {
  //await the response of the fetch call
  const response = await fetch('http://api.citybik.es/v2/networks');
  //proceed once promise is resolved
  const result = await response.json();
  const networks = result.networks;
  const bikeCities = networks.map(network => {
    return network.location.city;
  });
  return bikeCities;
}
