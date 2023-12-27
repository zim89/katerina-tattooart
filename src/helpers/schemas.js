import * as yup from 'yup';

const auth = yup
  .object({
    email: yup
      .string()
      .email('Введіть валідний email')
      .required("Обов'язкове поле"),
    password: yup
      .string()
      .required("Обов'язкове поле")
      .min(6, 'Пароль має містити щонайменше 6 символів'),
  })
  .required();

const consultation = yup
  .object({
    username: yup.string().required("Обов'язкове поле"),
    phone: yup
      .string()
      .required("Обов'язкове поле")
      .matches(/\+38\d{3} \d{3}-\d{2}-\d{2}/, 'Не валідний телефон'),
    message: yup.string().required("Обов'язкове поле"),
  })
  .required();

const review = yup
  .object({
    name: yup
      .string()
      .required("Обов'язкове поле")
      .min(3, 'Мінімум 3 символи')
      .max(15, 'Максимум 15 символів'),
    review: yup
      .string()
      .required("Обов'язкове поле")
      .max(300, 'Максимум 300 символів'),
  })
  .required();

const contactUs = yup
  .object({
    username: yup
      .string()
      .required("Обов'язкове поле")
      .min(3, 'Мінімум 3 символи')
      .max(15, 'Максимум 15 символів'),
    phone: yup
      .string()
      .required("Обов'язкове поле")
      .matches(/\+38\d{3} \d{3}-\d{2}-\d{2}/, 'Не валідний телефон'),
    message: yup
      .string()
      .required("Обов'язкове поле")
      .min(15, 'Мінімум 15 символів')
      .max(300, 'Максимум 300 символів'),
  })
  .required();

const schemas = { auth, consultation, review, contactUs };

export default schemas;
