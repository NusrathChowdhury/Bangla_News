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

const NewsCard = ({ news }: { news: News }) => {
    return (
        <Link href={`/news/${news.id}`}>
            <article className="card bg-base-100 shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden h-full">

                <figure>
                    <Image
                        height={300}
                        width={300}
                        src={news.imageUrl}
                        alt={news.imageAlt || news.title}
                        className="w-full h-48 object-cover"
                    />
                </figure>

                <div className="card-body p-4">
                    <p className="text-red-600 font-semibold text-sm">
                        {news.category}
                    </p>

                    <h2 className="card-title text-lg leading-snug">
                        {news.title}
                    </h2>

                    <p className="text-sm text-base-content/70 line-clamp-2">
                        {news.description}
                    </p>
                </div>

            </article>
        </Link>
    );
};

export default NewsCard;
