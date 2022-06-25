export const SaveOnStorage = (key, element) => {
  //Get eleemtns from Local Storage
  let items = JSON.parse(localStorage.getItem(key));

  //Check if its an array
  if(Array.isArray(items)){
    items.push(element);
  }else {
    items = [element];
  }

  //Save on Local Storage
  localStorage.setItem(key, JSON.stringify(items));

  return element;
}