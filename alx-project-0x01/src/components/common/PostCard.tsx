import React from 'react';

interface PostCardProps {
    title: string;
    body: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, body }) => {
    return (
        <div className="border p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{body}</p>
        </div>
    );
};

export default PostCard;