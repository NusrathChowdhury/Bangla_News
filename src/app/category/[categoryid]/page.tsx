import NewsCard from "@/components/NewsCard";
import React from "react";

interface News {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
}

const CategoryNews = async ({
    params,
}: {
    params: Promise<{
        categoryid: string;
    }>;
}) => {
    const { categoryid } = await params;

    const res = await fetch(
        `https://news-api-v2.vercel.app/api/category/${categoryid}`
    );

    const data = await res.json();

    const categoryNews: News[] = data.data;

    return (
        <main className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-2xl md:text-3xl font-bold border-b-2 border-red-700 pb-3 mb-6">
                {data.title}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryNews.map((news) => (
                    <NewsCard
                        key={news.id}
                        news={news}
                    />
                ))}
            </div>
        </main>
    );
};

export default CategoryNews;
