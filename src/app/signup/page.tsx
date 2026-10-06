import React from "react";

const SignUPPage = () => {
    return (
        <div className="min-h-[calc(100vh-120px)] flex items-center justify-center px-4 py-10 bg-base-200">
            <div className="w-full max-w-md">

                {/* Page Heading */}
                <div className="text-center mb-6">
                     <p className="text-red-600 font-semibold text-sm mb-2">
                        Sign Up
                    </p>

                    <h1 className="text-3xl md:text-2xl font-bold">
                        নতুন অ্যাকাউন্ট তৈরি করুন
                    </h1>

                    <p className="text-base-content/60 mt-2">
                        আমাদের সাথে যুক্ত হয়ে সর্বশেষ খবরগুলো সবার আগে জানুন
                    </p>
                </div>

                {/* Signup Card */}
                <form className="card bg-base-100 shadow-xl border border-base-300">
                    <fieldset className="p-6 md:p-8">
                        {/* Name */}
                        <div className="mb-4">
                            <label className="label mb-1">
                                <span className="label-text font-semibold">
                                    নাম
                                </span>
                            </label>

                            <input
                                type="text"
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
                                type="email"
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
                                type="password"
                                className="input input-bordered w-full focus:border-red-600 focus:outline-none"
                                placeholder="আপনার পাসওয়ার্ড লিখুন"
                            />
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
                                Sign In
                            </span>
                        </div>

                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default SignUPPage;
