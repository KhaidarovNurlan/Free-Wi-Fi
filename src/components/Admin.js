import React, { useEffect, useState } from 'react';

const Admin = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                data.sort((a, b) => a.address.city.localeCompare(b.address.city));
                setUsers(data);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className="user-list">
          <div className="user-list-content">
            <h1>Список наших жертв 😈</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <strong>{user.name}</strong>
                        <div className="user-info">Email: {user.email}</div>
                        <div className="user-info">Город: {user.address.city}</div>
                        <div className="user-info">Телефон: {user.phone}</div>
                        <div className="user-info">Сайт: {user.website}</div>
                    </li>
                ))}
            </ul>
          </div>
        </div>
    );
};

export default Admin;