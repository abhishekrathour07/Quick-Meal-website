import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
    FormLabel,
} from '../../components/ui/form';
import { addItemSchema } from './validation/addItems.validation';
import { toast } from 'sonner';
import axios from 'axios';

type AddItemType = {
    name: string;
    description: string;
    price: string;
    image: string; // Changed from File to string URL
    category: string;
};

type Props = {
    url: string;
};

const AddItems: React.FC<Props> = ({ url }) => {
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const form = useForm<any>({
        defaultValues: {
            name: '',
            description: '',
            price: '',
            image: '', // Changed to string
            category: '',
        },
        resolver: yupResolver(addItemSchema),
    });

    const handleImageUrlChange = (imageUrl: string) => {
        setImagePreview(imageUrl);
        form.setValue('image', imageUrl);
    };

    const submitForm = async (data: AddItemType) => {
        try {
            const response = await axios.post(`${url}/api/food/add`, {
                name: data.name,
                description: data.description,
                price: data.price,
                category: data.category,
                image: data.image // Send image URL directly
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.data.success) {
                toast.success(response.data.message);
                form.reset();
                setImagePreview(null);
            } else {
                toast.error(response.data.message || 'Failed to add item.');
            }
        } catch (error: any) {
            console.error('Error:', error);
            toast.error(error.response?.data?.message || 'An unexpected error occurred.');
        }
    };

    const onSubmit = async (data: AddItemType) => {
        await submitForm(data);
    };

    return (
        <div className="bg-white bg-[url(/background.png)] shadow-md rounded-xl p-8 m-4 w-full max-w-5xl h-[85vh] mx-auto overflow-y-scroll scrollbar-hide">
            <h2 className="text-2xl font-bold mb-6 ">Add Food Item</h2>
            <Form {...form}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-medium">
                                Food Item Name <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                                <input
                                    type="text"
                                    className="w-full p-3 border rounded-md outline-none   border-slate-500 focus:ring-2 focus:ring-slate-400"
                                    placeholder="Enter food item name"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="description"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-medium text-black">
                                Description <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                                <textarea
                                    rows={3}
                                    className="w-full p-3 border rounded-md outline-none border-slate-500 focus:ring-2 focus:ring-slate-400"
                                    placeholder="Enter a description of the food item"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-medium black">
                                Price <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                                <input
                                    type="text"
                                    placeholder="Enter the price of food"
                                    className="w-full p-3 border rounded-md outline-none  border-slate-500 focus:ring-2 focus:ring-slate-400"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="mt-8 font-medium text-black">
                                Upload Image <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                                <div className="space-y-4">
                                    <div>
                                        <input
                                            type="url"
                                            placeholder="Enter image URL (e.g., https://example.com/image.jpg)"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                            onChange={(e) => {
                                                const imageUrl = e.target.value;
                                                handleImageUrlChange(imageUrl);
                                                field.onChange(imageUrl);
                                            }}
                                            value={field.value || ''}
                                        />
                                    </div>
                                    {imagePreview && (
                                        <div className="flex justify-center">
                                            <img
                                                src={imagePreview}
                                                alt="Preview"
                                                className="w-40 h-40 object-cover rounded-lg shadow-md"
                                                onError={() => {
                                                    setImagePreview(null);
                                                    toast.error('Invalid image URL');
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-medium text-black">
                                Category <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                                <select
                                    className="border rounded-lg py-1 px-4 w outline-none font-semibold border-slate-500 w-full h-12 text-center "
                                    {...field} 
                                >
                                    <option value="Veg">Veg</option>
                                    <option value="Non-Veg">Non-Veg</option>
                                    <option value="North-Indian">North-Indian</option>
                                    <option value="South-Indian">South-Indian</option>
                                    <option value="Chinease">Chinease</option>
                                </select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <button
                    type="submit"
                    className="mt-6 w-full bg-black hover:bg-slate-800 text-white font-bold py-3 rounded-md transition duration-300"
                    onClick={form.handleSubmit(onSubmit)}
                >
                    Add Item
                </button>
            </Form>
        </div>
    );
};

export default AddItems;
