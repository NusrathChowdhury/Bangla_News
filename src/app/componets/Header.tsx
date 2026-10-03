import NavLinks from "@/components/NavLinks";
import Image from "next/image";

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <header className="bg-base-100 border-b border-base-200">

            {/* Top Header */}
            <div className="max-w-7xl mx-auto px-4 py-5">
                <div className="flex items-center justify-between">

                    {/* Logo & Website Info */}
                    <div className="flex items-center gap-4">
                        <Image
                            src="/logo.webp"
                            alt="Bangla News 24 Logo"
                            width={70}
                            height={70}
                            className="object-contain"
                        />

                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold">
                                Bangla News 24
                            </h1>

                            <p className="text-sm text-base-content/60 mt-1">
                                {date}
                            </p>
                        </div>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-2">
                        <button className="btn btn-ghost font-semibold">
                            সাইন ইন
                        </button>

                        <button className="btn btn-primary rounded-lg px-5">
                            সাইন আপ
                        </button>
                    </div>

                </div>
            </div>

            {/* Navigation */}
            <div className="border-t border-base-200">
                <div className="max-w-7xl mx-auto px-4">
                    <NavLinks />
                </div>
            </div>

        </header>
    );
};

export default Header;
