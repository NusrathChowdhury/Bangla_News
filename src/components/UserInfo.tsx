"use client";

import { authClient } from "@/lib/auth-client";
import React from "react";
import Link from "next/link";

const UserInfo = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleSignOut = async () => {
        await authClient.signOut();
    };

    return (
        <div>
            {user ? (
                <div className="flex items-center gap-4">
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
                            <img
                                src={user.image || "/logo.webp"}
                                alt={user.name}
                            />
                        </div>
                    </div>

                    <div>
                        <h2 className="font-bold">{user.name}</h2>
                        <p className="text-sm text-base-content/60">
                            {user.email}
                        </p>
                    </div>

                    <button
                        onClick={handleSignOut}
                        className="btn btn-error text-white"
                    >
                        সাইন আউট
                    </button>
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <Link
                        href={"/signin"}
                        className="btn btn-ghost font-semibold"
                    >
                        সাইন ইন
                    </Link>

                    <Link
                        href={"/signup"}
                        className="btn bg-red-700 hover:bg-red-800 text-white border-none rounded-lg px-5"
                    >
                        সাইন আপ
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserInfo;
