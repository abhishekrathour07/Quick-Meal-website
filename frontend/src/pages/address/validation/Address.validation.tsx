import * as yup from "yup";


export const addressSchema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    phone: yup
        .string()
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
        .required("Phone number is required"),
    addressLine: yup.string().required("Address is required"),
    city: yup.string().required("City is required"),
    postalCode: yup
        .string()
        .matches(/^[0-9]{6}$/, "Postal code must be 6 digits")
        .required("Postal code is required"),
    locality: yup.string().notRequired().nullable().default(""),

});