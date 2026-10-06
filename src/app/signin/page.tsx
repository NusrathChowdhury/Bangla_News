import React from "react";

const SignInPage = () => {
    return (
        <div className="min-h-[calc(100vh-120px)] flex items-center justify-center px-4 py-10 bg-base-200">
            <div className="w-full max-w-md">

                {/* Page Heading */}
                <div className="text-center mb-6">
                    <p className="text-red-600 font-semibold text-sm mb-2">
                        Sign In
                    </p>

                    <h1 className="text-3xl md:text-2xl font-bold">
                        আপনার অ্যাকাউন্টে প্রবেশ করুন
                    </h1>

                    <p className="text-base-content/60 mt-2">
                        সর্বশেষ খবর জানতে আপনার অ্যাকাউন্টে প্রবেশ করুন
                    </p>
                </div>

                {/* Sign In Card */}
                <form className="card bg-base-100 shadow-xl border border-base-300">
                    <fieldset className="p-6 md:p-8">

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
                            প্রবেশ করুন
                        </button>

                        {/* Sign Up */}
                        <div className="text-center mt-6 text-sm">
                            <span className="text-base-content/60">
                                অ্যাকাউন্ট নেই?
                            </span>{" "}
                            <span className="text-red-600 font-semibold cursor-pointer hover:underline">
                                Sign Up
                            </span>
                        </div>

                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default SignInPage;
