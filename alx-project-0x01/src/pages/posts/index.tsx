import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const PostsPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6">Posts</h1>
                {/* Posts will be listed here */}
            </main>
            <Footer />
        </div>
    );
};

export default PostsPage;