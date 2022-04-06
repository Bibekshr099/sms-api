import * as yup from 'yup';

export const sendMessage = yup.object({
  body: yup.object({
    phone: yup
      .string()
      .required()
      .length(10)
      .matches(/^[0-9]+$/),
    message: yup.string().required().max(160)
  })
});
