const getDuplicate = (err: any) => {
  let str = "";
  for (let [key, value] of Object.entries(err.keyValue)) {
    str += `${key} ${value} already exists.`;
  }
  return str;
};

export default getDuplicate;
