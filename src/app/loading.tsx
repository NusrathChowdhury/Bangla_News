import React from "react";

const Loading = () => {
    return (
        <div className="min-h-[calc(100vh-120px)] flex items-center justify-center bg-base-200">
            <div className="text-center">

                {/* Spinner */}
                <span className="loading loading-spinner loading-lg text-red-600"></span>

                {/* Text */}
                <h2 className="text-xl font-bold mt-5">
                    খবর লোড হচ্ছে...
                </h2>

                <p className="text-sm text-base-content/60 mt-2">
                    অনুগ্রহ করে একটু অপেক্ষা করুন
                </p>

                {/* Brand */}
                <p className="text-sm text-red-600 font-semibold mt-5">
                    Bangla News 24
                </p>

            </div>
        </div>
    );
};

export default Loading;
