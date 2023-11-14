const colors = ['red-400', 'teal-500', 'indigo-400', 'pink-400', 'sky-400'];

const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};

export default getRandomColor;
