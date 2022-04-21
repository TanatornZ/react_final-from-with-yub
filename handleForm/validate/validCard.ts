import { object, string } from "yup";

export const validationSchema = object().shape({
  email: string().required("Enter email"),
  cardNumber: string().required("Enter Card Number").length(19),
  cardExpiration: string().required("Enter Card Expiration"),
  // cardCvv : string().required('Enter Card CVV').min(3).max(4)
});

