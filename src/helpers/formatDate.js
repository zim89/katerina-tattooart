import { format, parseISO } from 'date-fns';

const formatDate = (date) => {
  const res = format(parseISO(date), 'dd.MM.yyyy');
  return res;
};

export default formatDate;
