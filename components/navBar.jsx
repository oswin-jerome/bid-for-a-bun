/* eslint-disable @next/next/no-img-element */
import React from "react";
const NavBar = () => {
    return (
        <nav className="flex justify-between container m-auto items-center p-3">
            <div>
                <img className="h-12" src="assets/logo.png" alt="" />
            </div>
            <ul className="flex gap-10 font-semibold text-gray-700">
                <li>
                    <a className="hover:text-app-500 border-b-2 border-transparent hover:border-app-100" href="http://fb.me/bid.for.a.bun">
                        <img src="assets/facebook.png" className="h-8" alt="" />
                    </a>
                </li>
                <li>
                <a className="hover:text-app-500 border-b-2 border-transparent hover:border-app-100" href="http://www.instagram.com/bid_for_a_bun">
                        <img src="assets/instagram.png" className="h-8" alt="" />
                    </a>
                </li>

            </ul>
        </nav>
    );
};

export default NavBar;
