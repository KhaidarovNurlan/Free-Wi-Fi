import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        password: '',
        cardCVC: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Данные регистрации:', formData);
    };

    return (
        <div className="registration-form">
          <div className="registration-form-content">
            <h1>Регистрация 😁</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Имя пользователя:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Пароль:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Телефон:</label>
                    <input type="number" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div>
                    <label>Город:</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                </div>
                <div>
                    <label>Три цифры с обратной стороны карты:</label>
                    <input type="number" name="cardCVC" value={formData.cardCVC} onChange={handleChange} maxLength="3" required />
                </div>
                <button type="submit">Регистрация</button>
            </form>
          </div>
        </div>
    );
};

export default Register;