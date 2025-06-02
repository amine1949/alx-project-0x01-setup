import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    ALX Project
                </Link>
                <div className="flex space-x-4">
                    <Link href="/posts">Posts</Link>
                    <Link href="/users">Users</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;