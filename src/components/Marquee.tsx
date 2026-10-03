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
            <div className="max-w-7xl mx-auto flex items-center">

                {/* সর্বশেষ */}
                <div className="shrink-0 bg-red-700 px-5 py-2.5 text-sm font-bold">
                    সর্বশেষ
                </div>

                {/* Marquee */}
                <div className="min-w-0 flex-1">
                    <MarqueeText
                        direction="right"
                        speed={10}
                        loop={true}
                        className="text-white text-sm py-2.5 font-semibold"
                    >
                        {headlines.map((h) => (
                            <span key={h.id} className="inline-flex items-center">
                                <span>{h.title}</span>
                                <span className="mx-5 text-red-200">•</span>
                            </span>
                        ))}
                    </MarqueeText>
                </div>

            </div>
        </div>
    );
};

export default Marquee;
