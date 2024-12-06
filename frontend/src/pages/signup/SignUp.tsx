import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../components/ui/form";
import { SignUpSchema } from "./validation/Signup.validation";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


type signupTypes = {
    username: string;
    email: string;
    password: string;
}
const Signup: React.FC = () => {

    const form = useForm<signupTypes>({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
        resolver: yupResolver(SignUpSchema),
    });

    const onSubmit = async (data: signupTypes) => {
        try {
            const url = "http://localhost:3005/auth/signup"
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            const result = await response.json();
            const { success, message } = result

            if (success) {
                console.log(message);
                toast.success(message);
                navigate('/login')
            }
            else {
                toast.error(message)
                form.reset()
            }
        } catch (error: any) {
            toast(error)
            form.reset()
        }
    }

    const navigate = useNavigate();

    return (
        <div className="min-h-[90vh] flex items-center justify-center  p-6 bg-slate-100">
            <div className="flex flex-col md:flex-row bg-white shadow-lg max-w-5xl w-full">
                {/* Left Image Section */}
                <div className="hidden md:block w-1/2">
                    <img
                        src="/images/login.webp"
                        alt="Signup illustration"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Form Section */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                        Create Your Account
                    </h2>
                    <Form {...form}>
                        <div className="space-y-4">
                            {/* Username Field */}
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-medium text-gray-700">
                                            Username<span className="text-red-500">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <input
                                                className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-slate-500"
                                                placeholder="Enter your username"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Email Field */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-medium text-gray-700">
                                            Email Address<span className="text-red-500">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <input
                                                type="email"
                                                className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-slate-500"
                                                placeholder="Enter your email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Password Field */}
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-medium text-gray-700">
                                            Password<span className="text-red-500">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <input
                                                type="password"
                                                className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-slate-500"
                                                placeholder="Enter your password"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Signup Button */}
                            <button
                                type="submit"
                                className="w-full bg-slate-900 text-white p-4 rounded-md hover:bg-slate-700 transition mt-4"
                                onClick={form.handleSubmit(onSubmit)}
                            >
                                Sign Up
                            </button>

                            {/* Login Redirect */}
                            <p className="text-center text-gray-600">
                                Already have an account?{" "}
                                <span
                                    className="text-red-600 font-semibold cursor-pointer"
                                    onClick={() => navigate("/login")}
                                >
                                    Login
                                </span>
                            </p>
                            <p className="text-sm text-slate-600">©2024 Quick Meal. All rights reserved <span className="text-sm font-medium text-slate-800">
                                Terms & Conditions
                                Privacy Policy</span></p>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
