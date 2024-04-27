
"use client";

import Link from 'next/link';
import brandLogo from "@/assets/logo-image/logo.png";
import Image from 'next/image';
import { signOut } from 'next-auth/react';

type UserProps = {
    user?: {
        name?: string | null;
        email?: string | null;
        image?: string | null;

    };

};


const Navbar = ({ session }: { session: UserProps | null }) => {



    return (
        <div className="navbar bg-blue-600">
            <div className="navbar-start mx-5">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-pink-500  rounded-box w-52"
                    >
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/products">Products</Link>
                        </li>
                        <li>
                            <Link href="/flash-sale">Flash Sale</Link>
                        </li>
                        <li>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li>
                            <Link href="/contact-us">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <Link href="/">
                    <Image src={brandLogo} width={100} height={100} alt="brand logo" />

                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white text-md">
                    <li>
                        <Link href="/">Home</Link>
                    </li>

                    <li>
                        <Link href="/products">Products</Link>
                    </li>
                    <li>
                        <Link href="/flashSale">Flash Sale</Link>
                    </li>
                    <li>
                        <Link href="/about">About Us</Link>
                    </li>
                    <li>
                        <Link href="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end mr-5">


                {
                    session?.user ? (

                        <div className='flex justify-between items-center'>

                            <h1 className="text-sm capitalize text-white">{session?.user?.name}</h1>

                            <Image
                                src={session?.user?.image || "https://i.ibb.co/98ft1Bv/41j-LBh-DISx-L-AC-UF1000-1000-QL80.jpg"}
                                width={30}
                                height={30}
                                alt="User-image"
                                className="mx-auto rounded-full"
                            />

                            <button onClick={() => signOut()} className="text-white bg-yellow-500 rounded-full px-3 py-2 ml-2">
                                Logout
                            </button>
                        </div>
                    ) : (

                        <Link
                            href="/login"
                            className="btn btn-accent text-white px-7 py-3"
                        >
                            Login
                        </Link>

                    )
                }


            </div>
        </div>
    );
};

export default Navbar;