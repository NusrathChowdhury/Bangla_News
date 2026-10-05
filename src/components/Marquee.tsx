import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Headline {
    id: string;
    title: string;
}

const Marquee = async () => {
    const res = await fetch(
        "https://news-api-v2.vercel.app/api/news?limit=10"
    );

    const data = await res.json();

    const headlines: Headline[] = data.data;

    return (
        <div className="w-full bg-red-600 text-white">
            <div className="w-full flex items-center h-9">

                {/* Latest */}
                <div className="shrink-0 bg-red-700 h-9 flex items-center px-4 text-sm font-bold">
                    সর্বশেষ
                </div>

                {/* Marquee */}
                <div className="flex-1 min-w-0 h-9 overflow-hidden">
                    <MarqueeText
                        direction="right"
                        speed={30}
                        loop={true}
                        className="text-white text-sm font-semibold leading-9"
                    >
                        {headlines.map((h) => (
                            <span
                                key={h.id}
                                className="inline-flex items-center"
                            >
                                <span>{h.title}</span>

                                <span className="mx-5 text-red-200">
                                    •
                                </span>
                            </span>
                        ))}
                    </MarqueeText>
                </div>

            </div>
        </div>
    );
};

export default Marquee;
