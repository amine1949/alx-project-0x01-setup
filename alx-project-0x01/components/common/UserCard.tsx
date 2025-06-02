import React from 'react';
import { UserProps } from '../../interfaces';

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
    return (
        <div className="border rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    {user.name.charAt(0)}
                </div>
                <div>
                    <h2 className="text-xl font-bold">{user.name}</h2>
                    <p className="text-gray-500">@{user.username}</p>
                </div>
            </div>

            <div className="space-y-2">
                <p><span className="font-semibold">Email:</span> {user.email}</p>
                <p><span className="font-semibold">Phone:</span> {user.phone}</p>
                <p><span className="font-semibold">Website:</span> {user.website}</p>

                <div className="mt-4 p-3 bg-gray-50 rounded">
                    <h3 className="font-semibold">Address</h3>
                    <p>{user.address.street}, {user.address.suite}</p>
                    <p>{user.address.city}, {user.address.zipcode}</p>
                </div>

                <div className="mt-3 p-3 bg-gray-50 rounded">
                    <h3 className="font-semibold">Company</h3>
                    <p>{user.company.name}</p>
                    <p className="italic">"{user.company.catchPhrase}"</p>
                </div>
            </div>
        </div>
    );
};

export default UserCard;