interface MostReadNews {
    id: string;
    title: string;
}

const MostRead = async () => {
    const res = await fetch(
        "https://news-api-v2.vercel.app/api/news/most-read"
    );

    const data = await res.json();

    const news: MostReadNews[] = data.data;

    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="border-b-2 border-red-600 px-4 py-3">
                <h1 className="text-xl font-bold">
                    সর্বাধিক পঠিত
                </h1>
            </div>

            <div className="grid gap-3 p-3">
                {news.map((n, i) => (
                    <div
                        key={n.id}
                        className="flex gap-3 items-start p-3 border border-base-300 rounded-lg hover:bg-base-200 transition-colors duration-200"
                    >
                        <p className="text-2xl font-bold text-red-600 min-w-8">
                            {i + 1}
                        </p>

                        <h2 className="font-semibold text-sm leading-6">
                            {n.title}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MostRead;
