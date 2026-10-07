import NavLinks from "@/components/NavLinks";
import Image from "next/image";
import UserInfo from "./UserInfo";

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <header className="bg-base-100 border-b border-base-200">

            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 py-5">
                <div className="relative flex flex-col items-center">

                    {/* Logo + Name + Date */}
                    <div className="flex items-center gap-3">
                        <Image
                            src="/logo.webp"
                            alt="Bangla News 24 Logo"
                            width={70}
                            height={70}
                            className="object-contain shrink-0"
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

                    {/* User Info */}
                    <div className="mt-4 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2">
                        <UserInfo />
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
