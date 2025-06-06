import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import UserCard from '../../components/common/UserCard';
import { UserProps } from '../../interfaces';

interface UsersPageProps {
    users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6">Users</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {users.map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    return {
        props: {
            users
        }
    };
}

export default UsersPage;