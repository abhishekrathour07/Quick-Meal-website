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
import { useNavigate } from "react-router-dom";
import { LoginSchema } from "./validation/Login.validation";

const Login: React.FC = () => {
    const form = useForm({
        defaultValues: {

            email: "",
            password: "",
        },
        resolver: yupResolver(LoginSchema),
    });

    const onSubmit = (data: any) => {
        console.log("Form submitted:", data);
    };

    const navigate = useNavigate();

    return (
        <div className="min-h-[90vh] flex items-center justify-center  p-12 bg-slate-100">
            <div className="flex flex-col md:flex-row bg-white  drop-shadow-lg max-w-4xl w-full">
                {/* Left Image Section */}
                <div className="hidden md:block w-1/2">
                    <img
                        src="/images/login.webp"
                        alt="Signup illustration"
                        className="h-full w-full object-cover "
                    />
                </div>

                {/* Form Section */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                        Welcome back login here..
                    </h2>
                    <Form {...form}>
                        <div className="space-y-4">
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
                                                className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-purple-500"
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
                                                className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-purple-500"
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
                                 className="w-full bg-violet-600 text-white p-4 rounded-md hover:bg-violet-700 transition mt-4"
                                onClick={form.handleSubmit(onSubmit)}
                            >
                                Login
                            </button>

                            {/* Login Redirect */}
                            <p className="text-center text-gray-600">
                                Don't have an account?{" "}
                                <span
                                    className="text-purple-600 font-semibold cursor-pointer"
                                    onClick={() => navigate("/signup")}
                                >
                                    Signup
                                </span>
                            </p>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;