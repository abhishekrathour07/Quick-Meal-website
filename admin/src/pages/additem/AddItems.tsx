import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
    FormLabel
} from '../../components/ui/form';
import { addItemSchema } from './validation/addItems.validation';

type addItemType = {
    name: string;
    description: string;
    price: string;
    image: File | null;
    category: string;
};

const AddItems: React.FC = () => {

    const form = useForm<any>({
        defaultValues: {
            name: '',
            description: '',
            price: '',
            image: null,
            category: '',
        },
        resolver: yupResolver(addItemSchema),
    });

    // Handle image change for preview
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
            form.setValue('image', file);
        }
    };

    const onSubmit = (data: addItemType) => {
        console.log('Form Data:', data);
    };

    return (
        <div className="bg-slate-800 shadow-md rounded-xl p-8 m-4 w-full max-w-5xl h-[85vh] mx-auto overflow-y-scroll scrollbar-hide">
            <h2 className="text-2xl font-bold mb-6 text-slate-100">Add Food Item</h2>
            <Form {...form}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-medium text-white">
                                Food Item Name <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                                <input
                                    type="text"
                                    className="w-full p-3 border rounded-md outline-none bg-slate-700 text-slate-200 border-slate-600 focus:ring-2 focus:ring-slate-400"
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
                            <FormLabel className="font-medium text-white">
                                Description <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                                <textarea
                                    rows={3}
                                    className="w-full p-3 border rounded-md outline-none bg-slate-700 text-white border-slate-600 focus:ring-2 focus:ring-slate-400"
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
                            <FormLabel className="font-medium text-white">
                                Price <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                                <input
                                    type="text"
                                    placeholder="Enter the price of food"
                                    className="w-full p-3 border rounded-md outline-none bg-slate-700 text-white border-slate-600 focus:ring-2 focus:ring-slate-400"
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
                            <FormLabel className="mt-8 font-medium text-white">
                                Upload Image <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                                <div className="border-2 border-dashed border-slate-500 p-4 rounded-lg flex items-center justify-center bg-slate-700 hover:border-slate-400 transition duration-300">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        id="file-upload"
                                        onChange={(e) => {
                                            handleImageChange(e);
                                            field.onChange(e.target.files?.[0] || null);
                                        }}
                                    />
                                    <label
                                        htmlFor="file-upload"
                                        className="cursor-pointer flex flex-col items-center"
                                    >
                                        {imagePreview ? (
                                            <img
                                                src={imagePreview}
                                                alt="Preview"
                                                className="w-40 h-40 object-cover rounded-lg shadow-md"
                                            />
                                        ) : (
                                            <>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-10 w-10 text-green-400 mb-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M3 16l3 3m0 0l3-3m-3 3V10m0-4h6m6 0h6M3 16v4m0 4h18m-18-4v4"
                                                    />
                                                </svg>
                                                <span className="text-slate-400">
                                                    Click to upload or drag & drop
                                                </span>
                                                <span className="text-sm text-slate-500">
                                                    Supported formats: JPG, PNG, Max size: 2MB
                                                </span>
                                            </>
                                        )}
                                    </label>
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
                            <FormLabel className="font-medium text-white">
                                Category <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                                <input
                                    type="text"
                                    placeholder="Enter food category (e.g., Snacks, Veg, Non-veg)"
                                    className="w-full p-3 border rounded-md outline-none bg-slate-700 text-slate-100 border-slate-600 focus:ring-2 focus:ring-slate-400"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Submit Button */}
                <button
                    type="submit"
                    className="mt-6 w-full bg-white hover:bg-slate-200 text-black font-bold py-3 rounded-md transition duration-300"
                    onClick={form.handleSubmit(onSubmit)}
                >
                    Add Item
                </button>
            </Form>
        </div>
    );
};

export default AddItems;
