import Link from "next/link";
import React from "react";

const Notfound = () => {
    return (
        <div className="min-h-[calc(100vh-120px)] flex items-center justify-center px-4 bg-base-200">
            <div className="text-center max-w-lg">

                {/* 404 */}
                <h1 className="text-8xl md:text-9xl font-black text-red-600 tracking-tight">
                    404
                </h1>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold mt-4">
                    পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
                </h2>

                {/* Description */}
                <p className="text-base-content/60 mt-3 leading-7">
                    দুঃখিত, আপনি যে সংবাদ বা পৃষ্ঠাটি খুঁজছেন
                    সেটি হয়তো সরিয়ে ফেলা হয়েছে অথবা আর উপলব্ধ নেই।
                </p>

                {/* Button */}
                <Link
                    href="/"
                    className="btn bg-red-600 hover:bg-red-700 text-white border-none mt-7 px-8"
                >
                    হোম পেজে ফিরে যান
                </Link>

                {/* Small text */}
                <p className="text-sm text-base-content/40 mt-5">
                    Bangla News 24
                </p>

            </div>
        </div>
    );
};

export default Notfound;
