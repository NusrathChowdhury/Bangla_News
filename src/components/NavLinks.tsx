import Link from "next/link";

interface Navs {
    slug: string;
    title: string;
    topicId: string | null;
    url: string;
    scrapable: boolean;
    createdAt: string;
    updatedAt: string;
}

const NavLinks = async () => {
    const res = await fetch(
        "https://news-api-v2.vercel.app/api/categories"
    );

    const data = await res.json();

    const nav: Navs[] = data.data;

    const filterdNavs = nav.filter((n) => n.scrapable);

    return (
        <div className="flex items-center justify-center gap-8 py-3 overflow-x-auto">

            <Link
                href="/"
                className="font-semibold hover:text-primary transition whitespace-nowrap"
            >
                হোম
            </Link>

            {filterdNavs.map((n) => (
                <Link
                    key={n.slug}
                    href={`/category/${n.slug}`}
                    className="whitespace-nowrap text-sm font-medium hover:text-primary transition"
                >
                    {n.title}
                </Link>
            ))}

        </div>
    );
};

export default NavLinks;
