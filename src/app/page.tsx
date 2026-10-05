import Marquee from "@/components/Marquee";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";
import MainNews from "@/components/mainNews";

interface IOthersection {
    curationId: string;
    title: string;
    articles: {
        id: string;
        title: string;
        description: string;
        imageUrl: string;
        category: string;
        imageAlt: string;
    }[];
}

export default async function Home() {
    const res = await fetch(
        "https://news-api-v2.vercel.app/api/news/sections"
    );

    const data = await res.json();

    const sections = data.data;

    const mainNews = sections[0].articles;
    const othersections:IOthersection[] = sections.slice(1);

    return (
        <div>
            

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  px-4 py-6">

                {/* News Section */}
                <div className="lg:col-span-2">
                    <MainNews news={mainNews} />

                    <div className="grid gap-6 mt-6">
                        {othersections.map((os) => (
                            <div
                                className="border-b-2 pb-4 border-red-700"
                                key={os.curationId}
                            >
                                <h1 className="font-bold text-xl mb-4">
                                    {os.title}
                                </h1>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {os.articles.map((news) => (
                                        <NewsCard
                                            key={news.id}
                                            news={news}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Most Read Section */}
                <div >
                  <MostRead/>
                </div>

            </div>
        </div>
    );
}
