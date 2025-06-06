import PostCard from "../../components/common/PostCard";
import Header from "../../components/layout/Header";
import { PostProps } from "../../interfaces";

interface PostsPageProps {
    posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="container mx-auto p-4 flex-grow">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold">Post Content</h1>
                    <button className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-full text-white transition-colors">
                        Add Post
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {posts?.map((post) => (
                        <PostCard key={post.id} {...post} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    return {
        props: {
            posts,
        },
    };
}

export default PostsPage;