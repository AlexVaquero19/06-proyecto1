export const GetFromStorage = (key) => {
  let items = JSON.parse(localStorage.getItem(key));

  if(Array.isArray(items)){
    return items;
  }
}