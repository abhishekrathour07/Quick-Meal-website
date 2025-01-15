import * as yup from 'yup';

export const SignUpSchema = yup.object().shape({
    username: yup.string().min(6, "Minimum 6 charcter is required").required("Username is required"),
    email: yup.string().email("Email format is not correct").required("Email is required"),
    password: yup.string().min(8, "Password atleast contain 8 charcter").required("Password is required"),
})