import Image from "next/image";
import Link from "next/link";
import React from "react";

interface News {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
    imageAlt: string;
}

const MainNews = ({ news }: { news: News[] }) => {
    const [firstNews, ...otherNews] = news;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Main News */}
            <Link href={`/news/${firstNews.id}`}>
                <article className="card bg-base-100 shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden h-full">

                    <figure>
                        <Image
                            height={400}
                            width={600}
                            src={firstNews.imageUrl}
                            alt={firstNews.imageAlt}
                            className="w-full h-64 object-cover"
                        />
                    </figure>

                    <div className="card-body p-5">
                        <p className="text-red-600 font-semibold text-sm">
                            {firstNews.category}
                        </p>

                        <h2 className="text-2xl font-bold leading-tight">
                            {firstNews.title}
                        </h2>

                        <p className="text-base-content/70 line-clamp-3">
                            {firstNews.description}
                        </p>
                    </div>

                </article>
            </Link>

            {/* Other Main News */}
            <div className="grid gap-3">
                {otherNews.slice(0, 4).map((on) => (
                    <Link
                        href={`/news/${on.id}`}
                        key={on.id}
                    >
                        <article className="card bg-base-100 border border-base-300 p-4 hover:shadow-md hover:border-red-300 transition-all duration-200">

                            <p className="text-red-600 font-semibold text-sm mb-1">
                                {on.category}
                            </p>

                            <h2 className="font-bold leading-6">
                                {on.title}
                            </h2>

                        </article>
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default MainNews;
