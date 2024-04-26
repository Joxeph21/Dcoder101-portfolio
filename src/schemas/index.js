import * as yup from "yup";

export const sendEmailSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("required"),
  email: yup.string().email("Invalid email").required("required"),
  message: yup
    .string()
    .min(6, "Too Short!")
    .max(300, "Too Long!")
    .required("required"),
});
