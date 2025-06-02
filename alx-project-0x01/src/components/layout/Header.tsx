import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="flex justify-between items-center container mx-auto">
                <Link href="/" className="text-xl font-bold">
                    ALX Project
                </Link>
                <div className="flex space-x-4">
                    <Link href="/posts" className="hover:text-blue-300">Posts</Link>
                    <Link href="/users" className="hover:text-blue-300">Users</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;