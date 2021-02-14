export const saveToLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLocalStorage = (key: string) => {
  let items = localStorage.getItem(key);

  if (items) {
    return JSON.parse(items);
  }
  return null;
};

export const deleteFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
