 import Image from "next/image";
import React from "react";

interface NewsDetailsProps {
    params: Promise<{
        newsid: string;
    }>;
}

const NewsDetails = async ({ params }: NewsDetailsProps) => {
    const { newsid } = await params;

    const res = await fetch(
        `https://news-api-v2.vercel.app/api/article/${newsid}`
    );

    const data = await res.json();

    const news = data.data;

    return (
        <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
            <article className="bg-base-100 rounded-2xl shadow-sm overflow-hidden">

                <div className="px-5 pt-6 md:px-8 md:pt-8">
                    <span className="inline-block bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                        {news.category}
                    </span>
                </div>

                <div className="px-5 pt-4 md:px-8">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        {news.title}
                    </h1>
                </div>

                <div className="px-5 py-6 md:px-8">
                    <div className="relative w-full h-64 md:h-[450px] overflow-hidden rounded-xl">
                        <Image
                            src={news.imageUrl}
                            alt={news.imageAlt || news.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="px-5 pb-8 md:px-8">
                    <p className="text-lg md:text-xl leading-8 text-base-content/75">
                        {news.text}
                    </p>
                </div>

            </article>
        </main>
    );
};

export default NewsDetails;
