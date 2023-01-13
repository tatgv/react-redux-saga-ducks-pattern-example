export function getItemsFromAPI(id) {
  // id is not needed, it is just an example when you actually need to send some payload
  console.log(id);
  // here can be any api call (link shouldn't be here though)
  return fetch('http://localhost:3000/items.json').then(resp => resp.json());
}
