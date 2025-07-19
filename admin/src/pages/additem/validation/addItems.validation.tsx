import * as yup from 'yup'

export const addItemSchema = yup.object({
    name: yup.string().required("Item name is required"),
    description: yup.string().min(20, "Atleast 20 charcter is required").required("Description is required"),
    price: yup.string().required("Price is required"),
    image: yup.string().url("Please enter a valid image URL").required("Image URL is required"),
    category: yup.string().required("Category of food is required")
})
