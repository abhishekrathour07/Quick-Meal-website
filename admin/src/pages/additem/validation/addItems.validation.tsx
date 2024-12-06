import * as yup from 'yup'

export const addItemSchema = yup.object({
    name: yup.string().required("Item name is required"),
    description: yup.string().min(20, "Atleast 20 charcter is required").required("Description is required"),
    price: yup.string().required("Price is required"),
    image: yup.mixed().required("Image file is required").nullable()
        .test(
            "fileType",
            "Only image files are allowed",
            (value) => !value || (value instanceof File && ["image/jpeg", "image/png"].includes(value.type))
        ).test(
            "fileSize",
            "File size must be less than 2MB",
            (value) => !value || (value instanceof File && value.size <= 2 * 1024 * 1024)
        ),
    category: yup.string().required("Category of food is required")
})
