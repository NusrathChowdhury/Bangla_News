
"use client";

import React from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignInPage = () => {
    const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const user = Object.fromEntries(formData.entries()) as {
            email: string;
            password: string;
        };

        if (!user.email) {
            toast.error("ইমেইল লিখুন");
            return;
        }

        if (!user.password) {
            toast.error("পাসওয়ার্ড লিখুন");
            return;
        }

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
            callbackURL: "/",
        });

        if (data) {
            toast.success("সফলভাবে লগইন হয়েছে!");

            setTimeout(() => {
                window.location.href = "/";
            }, 1000);

            return;
        }

        if (error) {
            if (error.code === "INVALID_EMAIL_OR_PASSWORD") {
                toast.error("ইমেইল অথবা পাসওয়ার্ড সঠিক নয়");
            } else if (error.code === "USER_NOT_FOUND") {
                toast.error("এই ইমেইলে কোনো অ্যাকাউন্ট পাওয়া যায়নি");
            } else {
                toast.error("লগইন করা যায়নি। আবার চেষ্টা করুন");
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
                        লগইন
                    </p>

                    <h1 className="text-3xl md:text-2xl font-bold">
                        আপনার অ্যাকাউন্টে প্রবেশ করুন
                    </h1>

                    <p className="text-base-content/60 mt-2">
                        সর্বশেষ খবর জানতে আপনার অ্যাকাউন্টে প্রবেশ করুন
                    </p>
                </div>

                {/* Sign In Card */}
                <form
                    onSubmit={onSubmit}
                    className="card bg-base-100 shadow-xl border border-base-300"
                >
                    <fieldset className="p-6 md:p-8">

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
                                required
                                className="input input-bordered w-full focus:border-red-600 focus:outline-none"
                                placeholder="আপনার পাসওয়ার্ড লিখুন"
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="btn w-full bg-red-600 hover:bg-red-700 text-white border-none mt-6 text-base"
                        >
                            প্রবেশ করুন
                        </button>

                        {/* Sign Up */}
                        <div className="text-center mt-6 text-sm">
                            <span className="text-base-content/60">
                                অ্যাকাউন্ট নেই?
                            </span>{" "}

                            <Link
                                href="/signup"
                                className="text-red-600 font-semibold hover:underline"
                            >
                                সাইন আপ করুন
                            </Link>
                        </div>

                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default SignInPage;
