const colors = [
  'bg-red-400',
  'bg-teal-500',
  'bg-indigo-400',
  'bg-pink-400',
  'bg-sky-400',
];

const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};

export default getRandomColor;
