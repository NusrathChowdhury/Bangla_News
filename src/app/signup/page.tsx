"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUPPage = () => {
    const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries()) as {
            name: string;
            email: string;
            password: string;
        };

        if (user.password.length < 8) {
            toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");
            return;
        }

        const { data, error } = await authClient.signUp.email({
            name: user.name,
            email: user.email,
            password: user.password,
            callbackURL: "/",
        });

        if (data) {
            toast.success("অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!");
            redirect("/");
        }

        if (error) {
            if (error.code === "USER_ALREADY_EXISTS") {
                toast.error("এই ইমেইল দিয়ে ইতিমধ্যে একটি অ্যাকাউন্ট রয়েছে");
            } else if (error.code === "PASSWORD_TOO_SHORT") {
                toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");
            } else {
                toast.error("অ্যাকাউন্ট তৈরি করা যায়নি। আবার চেষ্টা করুন");
            }
        }
    };

    return (
        <div className="min-h-[calc(100vh-120px)] flex items-center justify-center px-4 py-10 bg-base-200">

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
            />

            <div className="w-full max-w-md">

                {/* Page Heading */}
                <div className="text-center mb-6">
                    <p className="text-red-600 font-semibold text-sm mb-2">
                        নিবন্ধন
                    </p>

                    <h1 className="text-3xl md:text-2xl font-bold">
                        নতুন অ্যাকাউন্ট তৈরি করুন
                    </h1>

                    <p className="text-base-content/60 mt-2">
                        আমাদের সাথে যুক্ত হয়ে সর্বশেষ খবরগুলো সবার আগে জানুন
                    </p>
                </div>

                {/* Signup Card */}
                <form
                    onSubmit={onSubmit}
                    className="card bg-base-100 shadow-xl border border-base-300"
                >
                    <fieldset className="p-6 md:p-8">

                        {/* Name */}
                        <div className="mb-4">
                            <label className="label mb-1">
                                <span className="label-text font-semibold">
                                    নাম
                                </span>
                            </label>

                            <input
                                name="name"
                                type="text"
                                required
                                className="input input-bordered w-full focus:border-red-600 focus:outline-none"
                                placeholder="আপনার নাম লিখুন"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="label mb-1">
                                <span className="label-text font-semibold">
                                    ইমেইল
                                </span>
                            </label>

                            <input
                                name="email"
                                type="email"
                                required
                                className="input input-bordered w-full focus:border-red-600 focus:outline-none"
                                placeholder="আপনার ইমেইল লিখুন"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="label mb-1">
                                <span className="label-text font-semibold">
                                    পাসওয়ার্ড
                                </span>
                            </label>

                            <input
                                name="password"
                                type="password"
                                minLength={8}
                                required
                                className="input input-bordered w-full focus:border-red-600 focus:outline-none"
                                placeholder="কমপক্ষে ৮ অক্ষর লিখুন"
                            />

                            <p className="text-xs text-base-content/50 mt-2">
                                পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে
                            </p>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="btn w-full bg-red-600 hover:bg-red-700 text-white border-none mt-6 text-base"
                        >
                            অ্যাকাউন্ট তৈরি করুন
                        </button>

                        {/* Login */}
                        <div className="text-center mt-6 text-sm">
                            <span className="text-base-content/60">
                                ইতিমধ্যে অ্যাকাউন্ট আছে?
                            </span>{" "}
                            <span className="text-red-600 font-semibold cursor-pointer hover:underline">
                                লগইন করুন
                            </span>
                        </div>

                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default SignUPPage;
