const splitArray = (arr, split = 5) => {
  arr = [...arr];
  const newArr = [];

  while (arr.length) newArr.push(arr.splice(0, split));

  return newArr;
};

export default splitArray;
