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
import { LoginSchema } from "./validation/login.validation";
import { toast } from 'sonner'

const Login: React.FC = () => {
    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(LoginSchema),
    });
    const navigate = useNavigate();

    const onSubmit = async (data: any) => {
        console.log("Form data:", data);
        try {
            const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3005";
            const url = `${apiUrl}/auth/login`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            const { success, message, name, jwtToken } = result;

            if (success) {
                toast.success(message);
                localStorage.setItem("name", name);
                localStorage.setItem("jwtToken", jwtToken);
                navigate("/dashboard");
            }
        } catch (err: any) {
            toast.error("Something went wrong", err);
        }
    };



    return (
        <div className="min-h-[90vh] flex items-center justify-center  p-12 bg-slate-100">
            <div className="flex flex-col md:flex-row bg-white  drop-shadow-lg max-w-4xl w-full">
                {/* Left Image Section */}
                <div className="hidden md:block w-1/2">
                    <img
                        src="/admin.jpeg"
                        alt="Signup illustration"
                        className="h-full w-full object-cover "
                    />
                </div>

                {/* Form Section */}
                <div className="w-full md:w-1/2 p-8">
                    <div className="w-full flex justify-center items-center">

                        <h2 className="text-2xl font-bold py-1 text-center text-orange-500 border-b-2 border-orange-500 mb-2 inline-block">
                            Admin Panel
                        </h2>
                    </div>

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
                                Login
                            </button>

                            {/* Login Redirect */}
                            <p className="text-center text-gray-600">
                                Don't have an account?{" "}
                                <span
                                    className="text-red-600 font-semibold cursor-pointer"
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
