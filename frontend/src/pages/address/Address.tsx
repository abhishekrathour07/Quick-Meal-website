import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "../../components/ui/form";
import { addressSchema } from "./validation/Address.validation";
import { useCart } from "../../context/Cartcontext";
import { MoveLeft, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Address: React.FC = () => {

    const form = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            addressLine: "",
            city: "",
            postalCode: "",
            locality: "",
        },
        resolver: yupResolver(addressSchema),
    });

    const { cart } = useCart();
    const navigate = useNavigate();
    const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const onSubmit = (data: any) => {
        console.log("Address Submitted:", data);
    };

    return (
        <div className="p-6 bg-gray-100 h-screen  flex flex-col md:flex-row justify-around px-4 md:px-12 gap-6">
            <div className="w-full lg:w-60% bg-white p-8 mt-4 shadow-lg rounded-lg h-fit">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    Delivery Address
                </h2>
                <Form {...form}>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <input
                                            className="w-full p-2 border rounded-md"
                                            placeholder="First Name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <input
                                            className="w-full p-2 border rounded-md"
                                            placeholder="Last Name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">

                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <input
                                            type="tel"
                                            className="w-full p-2 border rounded-md"
                                            placeholder="Enter your phone number"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <input
                                            className="w-full p-2 border rounded-md"
                                            placeholder="Enter your city"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        {/* Postal Code */}
                        <FormField
                            control={form.control}
                            name="postalCode"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <input
                                            className="w-full p-2 border rounded-md"
                                            placeholder="Enter your Pin Code"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="locality"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <input
                                            className="w-full p-2 border rounded-md"
                                            placeholder="Locality (Optional)"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />
                    </div>

                    {/* Address Line */}
                    <FormField
                        control={form.control}
                        name="addressLine"
                        render={({ field }) => (
                            <FormItem className="mt-4">
                                <FormControl>
                                    <textarea
                                        className="w-full p-2 border rounded-md"
                                        placeholder="Enter your delivery address"
                                        rows={3}
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
                        className="w-full bg-slate-900 text-white p-4 rounded-md hover:bg-slate-950 transition mt-4"
                        onClick={form.handleSubmit((data) => {
                            onSubmit(data); // Perform the submission logic
                            navigate("/cart/address/payment");
                        })}
                    
                    >
                        SAVE AND DELIVER HERE
                    </button>
                </Form>
            </div>
            {/* Price Details Section */}
            <div className="w-full md:w-[35%] mt-6 lg:mt-0 flex-shrink-0">
                <div className="bg-white rounded-lg shadow-md p-4 mt-4">
                    <h2 className="text-lg font-bold text-slate-500 border-b pb-2">
                        PRICE DETAILS
                    </h2>
                    <div className="flex justify-between py-2">
                        <p>MRP</p>
                        <p>{totalCost}</p>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                        <p>Delivery Fee</p>
                        <p className="text-green-600">
                            {totalCost > 100 ? "Free" : "20"}
                        </p>
                    </div>
                    <div className="flex justify-between py-2">
                        <p className="text-lg font-bold">Total Amount</p>
                        <p className="font-semibold">
                            {totalCost > 100 ? totalCost : totalCost + 20}
                        </p>
                    </div>

                </div>
                <div className="bg-white rounded-lg shadow-md mt-6 p-4 text-center">
                    <p className="text-lg text-slate-500 flex">
                        <ShieldCheck size={44} />  Save and Secure Payment. Easy return. 100% Authentic products
                    </p>
                    <div
                        className="flex items-center justify-center gap-2 text-green-600 cursor-pointer mt-2"
                        onClick={() => navigate("/cart")}
                    >
                        <MoveLeft />
                        <h2>Back to Cart</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Address;
